import json
import traceback

MISSION_ID = "configurable"

class SimError(Exception):
    pass

_DIRS = ["N","E","S","W"]
_DELTA = {"N":(0,1),"E":(1,0),"S":(0,-1),"W":(-1,0)}

class Engine:
    def __init__(self, config=None):
        """Initialize engine with optional mission configuration.

        Args:
            config: Dictionary with mission configuration from JSON.
                   If None, uses default m1-06 configuration for backward compatibility.
        """
        self.gridW = 15
        self.gridH = 15

        # Use config if provided, otherwise use default m1-06 values
        if config:
            self._configure_from_dict(config)
        else:
            # Default m1-06 configuration for backward compatibility
            self.startX, self.startY, self.startDir = 2, 7, "E"
            self.goalX, self.goalY = -1, -1
            self.hasGoal = False
            self.initAsteroids = []
            self.initOpenings = [[10, 7]]
            self.initFieldPow = []
            self.initStations = [[5, 7]]
            self.stationDocks = set(tuple(d) for d in [[8, 8]])
            self.stationCollision = set(tuple(c) for c in [[5, 7], [5, 8], [5, 9], [6, 7], [6, 8], [6, 9], [7, 7], [7, 8], [7, 9]])
            self.initAliens = []
            self.initAmmo = []
            self.initPlayerPow = 0
            self.initPlayerAmmo = 0
            self.closeN = 1
            self.destroyN = 0
            self.collectN = 0
            self.deliverN = 0
            self.initPatrols = []

        self.reset()

    def _configure_from_dict(self, config):
        """Configure engine from mission dictionary.

        Supports both Version 2.0 schema (missions/data/*.js) and simple schema (missions/*.json).
        """
        global MISSION_ID
        MISSION_ID = config.get('id', 'unknown')

        # Check if this is Version 2.0 format (has 'world' key)
        if 'world' in config:
            # Version 2.0 schema
            world = config['world']
            player = config.get('player', {})

            # Start position
            start = world.get('start', {"x": 7, "y": 2, "dir": "N"})
            self.startX = start.get('x', 7)
            self.startY = start.get('y', 2)
            self.startDir = start.get('dir', 'N')

            # Goal position
            goal = world.get('goal')
            if goal:
                self.goalX = goal.get('x', -1)
                self.goalY = goal.get('y', -1)
                self.hasGoal = True
            else:
                self.goalX = self.goalY = -1
                self.hasGoal = False

            # World elements
            self.initAsteroids = world.get('asteroids', [])
            self.initOpenings = world.get('openings', [])
            self.initFieldPow = world.get('powerups', [])
            self.initStations = world.get('stations', [])
            self.initAliens = world.get('aliens', [])
            self.initAmmo = world.get('ammo', [])

            # Player starting inventory
            self.initPlayerPow = player.get('startPowerups', 0)
            self.initPlayerAmmo = player.get('startAmmo', 0)

            # Alien patrols
            self.initPatrols = world.get('alienPatrols', [])

            # Rules - Version 2.0 uses different key names
            rules = config.get('rules', {})
            self.closeN = rules.get('closeOpenings', 0)
            self.destroyN = rules.get('destroyAliens', 0)
            self.collectN = rules.get('collectPowerups', 0)
            self.deliverN = rules.get('deliverPowerups', 0)

            # Check reachGoal rule
            if not self.hasGoal and rules.get('reachGoal'):
                # If reachGoal is true but no goal is defined, that's an error
                # But let's be lenient and just set hasGoal
                self.hasGoal = True

        else:
            # Simple schema (original format)
            # Start position
            start = config.get('start', {"x": 7, "y": 2, "dir": "N"})
            self.startX = start.get('x', 7)
            self.startY = start.get('y', 2)
            self.startDir = start.get('dir', 'N')

            # Goal position
            goal = config.get('goal')
            if goal:
                self.goalX = goal.get('x', -1)
                self.goalY = goal.get('y', -1)
                self.hasGoal = True
            else:
                self.goalX = self.goalY = -1
                self.hasGoal = False

            # World elements
            self.initAsteroids = config.get('asteroids', [])
            self.initOpenings = config.get('openings', [])
            self.initFieldPow = config.get('field_powerups', [])
            self.initStations = config.get('stations', [])
            self.initAliens = config.get('aliens', [])
            self.initAmmo = config.get('ammo', [])

            # Player starting inventory
            self.initPlayerPow = config.get('start_powerups', 0)
            self.initPlayerAmmo = config.get('start_ammo', 0)

            # Rules
            rules = config.get('rules', {})
            self.closeN = rules.get('close_openings', 0)
            self.destroyN = rules.get('destroy_aliens', 0)
            self.collectN = rules.get('collect_powerups', 0)
            self.deliverN = rules.get('deliver_powerups', 0)

            # Alien patrols
            self.initPatrols = config.get('alien_patrols', [])

        # Station docks and collision zones (same for both schemas)
        # Try to get from config first (simple schema may have these)
        self.stationDocks = set(tuple(d) for d in config.get('station_docks', []))
        self.stationCollision = set(tuple(c) for c in config.get('station_collision', []))

        # If station_collision not provided, compute it from stations
        if not self.stationCollision and self.initStations:
            self.stationCollision = set()
            for s in self.initStations:
                sx, sy = s[0], s[1]
                # Station occupies: x to x+3 (4 wide), y to y+2 (3 high)
                for dx in range(4):
                    for dy in range(3):
                        self.stationCollision.add((sx + dx, sy + dy))

        # If station_docks not provided, compute it from stations
        if not self.stationDocks and self.initStations:
            self.stationDocks = set()
            for s in self.initStations:
                sx, sy = s[0], s[1]
                # Dock position: right-middle of the station (x+3, y+1)
                self.stationDocks.add((sx + 3, sy + 1))

    def reset(self):
        self.tick = 0
        self.x = self.startX
        self.y = self.startY
        self.dir = self.startDir
        self.asteroids = set(tuple(a) for a in self.initAsteroids)
        self.openingsOpen = set(tuple(o) for o in self.initOpenings)
        self.fieldPow = set(tuple(p) for p in self.initFieldPow)
        self.placedPow = set()
        self.aliens = set(tuple(a) for a in self.initAliens)
        self.destroyedAliens = set()
        self.fieldAmmo = set(tuple(a) for a in self.initAmmo)
        self.playerPow = self.initPlayerPow
        self.playerAmmo = self.initPlayerAmmo
        self.delivered = 0
        self.lastShot = None
        self.alienShots = []
        self.lastAnimation = None
        self.playerAlive = True
        self.patrols = []
        for ap in self.initPatrols:
            self.patrols.append({
                "pattern": [tuple(p) for p in ap["pattern"]],
                "idx": 0,
                "dir": ap.get("dir", "N"),
                "shoots": ap.get("shoots", False),
            })
        self.actions = []
        self.actionIndex = 0

    def _forward(self):
        return _DELTA[self.dir]

    def _ahead(self):
        dx, dy = self._forward()
        return self.x + dx, self.y + dy

    # --- Sensor API ---
    def wallAhead(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        return not (0 <= nx < self.gridW and 0 <= ny < self.gridH)

    def freeAhead(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        if not (0 <= nx < self.gridW and 0 <= ny < self.gridH):
            return False
        if (nx, ny) in self.asteroids or (nx, ny) in self.stationCollision or (nx, ny) in self.aliens:
            return False
        return True

    def isAsteroidAhead(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        return (nx, ny) in self.asteroids

    def isOpeningAhead(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        return (nx, ny) in self.openingsOpen

    def isAlienAhead(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        return (nx, ny) in self.aliens

    def scanForward(self):
        nx, ny = self._ahead()
        self.lastAnimation = {"type": "sensor_scan", "x": self.x, "y": self.y, "dir": self.dir, "tick": self.tick}
        if not (0 <= nx < self.gridW and 0 <= ny < self.gridH):
            return "wall"
        if (nx, ny) in self.asteroids:
            return "asteroid"
        if (nx, ny) in self.aliens:
            return "alien"
        if (nx, ny) in self.openingsOpen:
            return "opening"
        if (nx, ny) in self.fieldPow or (nx, ny) in self.placedPow:
            return "powerup"
        if (nx, ny) in self.fieldAmmo:
            return "ammo"
        if (nx, ny) in self.stationCollision or (nx, ny) in self.stationDocks:
            return "station"
        if self.hasGoal and nx == self.goalX and ny == self.goalY:
            return "goal"
        return "empty"

    # --- Movement & actions ---

    def move(self):
        dx, dy = self._forward()
        nx, ny = self.x + dx, self.y + dy
        if nx < 0 or nx >= self.gridW or ny < 0 or ny >= self.gridH:
            raise SimError(f"FEHLER: move() gegen Wand (Ziel {nx},{ny}).")
        if (nx, ny) in self.asteroids:
            raise SimError(f"FEHLER: Kollision mit Asteroid auf Feld ({nx},{ny}).")
        if (nx, ny) in self.stationCollision:
            raise SimError(f"FEHLER: Kollision mit Station auf Feld ({nx},{ny}).")
        if (nx, ny) in self.aliens:
            raise SimError(f"FEHLER: Kollision mit Alienschiff auf Feld ({nx},{ny}).")
        self.x, self.y = nx, ny
        self.tick += 1

    def turnLeft(self):
        self.dir = {"N":"W","W":"S","S":"E","E":"N"}[self.dir]
        self.tick += 1

    def turnRight(self):
        self.dir = {"N":"E","E":"S","S":"W","W":"N"}[self.dir]
        self.tick += 1

    def putPow(self):
        if self.playerPow <= 0:
            raise SimError("FEHLER: putPow() - Kein PowerUp im Inventar!")
        pos = (self.x, self.y)
        if pos in self.placedPow:
            raise SimError(f"FEHLER: Hier liegt bereits ein PowerUp auf ({self.x},{self.y}).")
        self.placedPow.add(pos)
        self.openingsOpen.discard(pos)
        self.playerPow -= 1
        self.tick += 1
        self.lastAnimation = {"type": "powerup_drop", "x": self.x, "y": self.y, "tick": self.tick}

    def removePow(self):
        pos = (self.x, self.y)
        if pos in self.fieldPow:
            self.fieldPow.discard(pos)
        elif pos in self.placedPow:
            self.placedPow.discard(pos)
        else:
            raise SimError(f"FEHLER: removePow() - Kein PowerUp auf Feld ({self.x},{self.y})!")
        self.playerPow += 1
        self.tick += 1
        self.lastAnimation = {"type": "powerup_pickup", "x": self.x, "y": self.y, "tick": self.tick}

    def loadPow(self):
        pos = (self.x, self.y)
        if pos not in self.stationDocks:
            raise SimError(f"FEHLER: loadPow() - Kein Stations-Dock auf ({self.x},{self.y})!")
        self.playerPow += 1
        self.tick += 1
        self.lastAnimation = {"type": "station_load", "x": self.x, "y": self.y, "tick": self.tick}

    def unloadPow(self):
        pos = (self.x, self.y)
        if pos not in self.stationDocks:
            raise SimError(f"FEHLER: unloadPow() - Kein Stations-Dock auf ({self.x},{self.y})!")
        if self.playerPow <= 0:
            raise SimError("FEHLER: unloadPow() - Kein PowerUp im Inventar!")
        self.playerPow -= 1
        self.delivered += 1
        self.tick += 1
        self.lastAnimation = {"type": "station_unload", "x": self.x, "y": self.y, "tick": self.tick}

    def removeAmmo(self):
        pos = (self.x, self.y)
        if pos not in self.fieldAmmo:
            raise SimError(f"FEHLER: removeAmmo() - Keine Munition auf ({self.x},{self.y})!")
        self.fieldAmmo.discard(pos)
        self.playerAmmo += 1
        self.tick += 1
        self.lastAnimation = {"type": "ammo_pickup", "x": self.x, "y": self.y, "tick": self.tick}

    def shoot(self):
        if self.playerAmmo <= 0:
            raise SimError("FEHLER: shoot() - Keine Munition!")
        self.playerAmmo -= 1
        dx, dy = self._forward()
        bx, by = self.x + dx, self.y + dy
        hitAlien = None
        beamEnd = [self.x, self.y]
        while 0 <= bx < self.gridW and 0 <= by < self.gridH:
            if (bx, by) in self.asteroids:
                beamEnd = [bx, by]
                break
            if (bx, by) in self.aliens:
                hitAlien = (bx, by)
                beamEnd = [bx, by]
                break
            beamEnd = [bx, by]
            bx += dx
            by += dy
        if hitAlien:
            self.aliens.discard(hitAlien)
            self.destroyedAliens.add(hitAlien)
        self.lastShot = {
            "from": [self.x, self.y],
            "to": beamEnd,
            "dir": self.dir,
            "hit_alien": list(hitAlien) if hitAlien else None,
            "tick": self.tick + 1
        }
        self.tick += 1

    # --- Moving aliens ---
    def stepAliens(self):
        self.alienShots = []
        for patrol in self.patrols:
            pattern = patrol["pattern"]
            if not pattern:
                continue
            oldPos = pattern[patrol["idx"]]
            patrol["idx"] = (patrol["idx"] + 1) % len(pattern)
            newPos = pattern[patrol["idx"]]
            self.aliens.discard(oldPos)
            if newPos not in self.destroyedAliens:
                self.aliens.add(newPos)
            dx2 = newPos[0] - oldPos[0]
            dy2 = newPos[1] - oldPos[1]
            if dx2 > 0: patrol["dir"] = "E"
            elif dx2 < 0: patrol["dir"] = "W"
            elif dy2 > 0: patrol["dir"] = "N"
            elif dy2 < 0: patrol["dir"] = "S"
            if patrol["shoots"] and newPos not in self.destroyedAliens:
                shot = self._alienTryShoot(newPos)
                if shot:
                    self.alienShots.append(shot)

    def _alienTryShoot(self, apos):
        ax, ay = apos
        for d in _DIRS:
            ddx, ddy = _DELTA[d]
            bx2, by2 = ax + ddx, ay + ddy
            while 0 <= bx2 < self.gridW and 0 <= by2 < self.gridH:
                if (bx2, by2) in self.asteroids:
                    break
                if bx2 == self.x and by2 == self.y:
                    self.playerAlive = False
                    return {"from": list(apos), "to": [self.x, self.y], "dir": d, "hit_player": True, "tick": self.tick}
                bx2 += ddx
                by2 += ddy
        return None

    def isSolved(self):
        if not self.playerAlive:
            return False
        if self.hasGoal:
            if self.x != self.goalX or self.y != self.goalY:
                return False
        if self.closeN > 0:
            closed = sum(1 for o in self.initOpenings if tuple(o) in self.placedPow)
            if closed < self.closeN:
                return False
        if self.destroyN > 0:
            if len(self.destroyedAliens) < self.destroyN:
                return False
        if self.collectN > 0:
            if self.playerPow < self.collectN:
                return False
        if self.deliverN > 0:
            if self.delivered < self.deliverN:
                return False
        return True

    def statusInfo(self):
        parts = [f"Pos: ({self.x},{self.y})"]
        if self.closeN > 0:
            closed = sum(1 for o in self.initOpenings if tuple(o) in self.placedPow)
            parts.append(f"geschlossen: {closed}/{self.closeN}")
        if self.destroyN > 0:
            parts.append(f"Aliens: {len(self.destroyedAliens)}/{self.destroyN}")
        if self.collectN > 0:
            parts.append(f"PowerUps: {self.playerPow}/{self.collectN}")
        if self.deliverN > 0:
            parts.append(f"geliefert: {self.delivered}/{self.deliverN}")
        if self.playerAmmo > 0 or self.initAmmo:
            parts.append(f"Ammo: {self.playerAmmo}")
        return " | ".join(parts)

    def state(self, msg=""):
        return {
            "mission": MISSION_ID,
            "tick": self.tick,
            "x": self.x,
            "y": self.y,
            "dir": self.dir,
            "powerups": sorted([list(p) for p in self.placedPow]),
            "field_powerups": sorted([list(p) for p in self.fieldPow]),
            "aliens": sorted([list(a) for a in self.aliens]),
            "field_ammo": sorted([list(a) for a in self.fieldAmmo]),
            "player_powerups": self.playerPow,
            "player_ammo": self.playerAmmo,
            "last_shot": self.lastShot,
            "alien_shots": self.alienShots,
            "last_animation": self.lastAnimation,
            "player_alive": self.playerAlive,
            "solved": self.isSolved(),
            "message": msg
        }

# Create default engine instance (backward compatibility)
engine = Engine()

def configure_engine(mission_config):
    """Configure the global engine with mission data from JSON.

    Args:
        mission_config: Dictionary containing mission configuration.
                       Supports both Version 2.0 schema (with 'world' key) and
                       simple schema (with 'engine' key).
    """
    global engine
    # Check if this is Version 2.0 format (has 'world' key)
    if 'world' in mission_config:
        # Version 2.0 schema - pass the entire mission config
        engine = Engine(mission_config)
    else:
        # Simple schema - extract the engine configuration
        engine_config = mission_config.get('engine', {})
        engine = Engine(engine_config)

def move(): engine.move()
def turnLeft(): engine.turnLeft()
def turnRight(): engine.turnRight()
def putPow(): engine.putPow()
def removePow(): engine.removePow()
def loadPow(): engine.loadPow()
def unloadPow(): engine.unloadPow()
def removeAmmo(): engine.removeAmmo()
def shoot(): engine.shoot()
def wallAhead(): return engine.wallAhead()
def freeAhead(): return engine.freeAhead()
def isAsteroid(): return engine.isAsteroidAhead()
def isOpening(): return engine.isOpeningAhead()
def isAlien(): return engine.isAlienAhead()
def scanForward(): return engine.scanForward()

ALLOWED_CALLS = ["loadPow", "move", "putPow", "removePow", "turnLeft", "turnRight"]

def _student_line(exc):
    tb = traceback.extract_tb(exc.__traceback__)
    for fr in reversed(tb):
        if fr.filename == '<string>':
            return fr.lineno
    return None

def loadProgram(studentCode: str):
    engine.reset()
    collected = []
    _output = []
    _sensorEngine = Engine()
    _sensorEngine.reset()
    def _move():
        collected.append("move")
        _sensorEngine.move()
    def _turnLeft():
        collected.append("turnLeft")
        _sensorEngine.turnLeft()
    def _turnRight():
        collected.append("turnRight")
        _sensorEngine.turnRight()
    def _putPow():
        collected.append("putPow")
        _sensorEngine.putPow()
    def _removePow():
        collected.append("removePow")
        _sensorEngine.removePow()
    def _loadPow():
        collected.append("loadPow")
        _sensorEngine.loadPow()
    def _unloadPow():
        collected.append("unloadPow")
        _sensorEngine.unloadPow()
    def _removeAmmo():
        collected.append("removeAmmo")
        _sensorEngine.removeAmmo()
    def _shoot():
        collected.append("shoot")
        _sensorEngine.shoot()
    def _wallAhead(): return _sensorEngine.wallAhead()
    def _freeAhead(): return _sensorEngine.freeAhead()
    def _isAsteroid(): return _sensorEngine.isAsteroidAhead()
    def _isOpening(): return _sensorEngine.isOpeningAhead()
    def _isAlien(): return _sensorEngine.isAlienAhead()
    def _scanForward(): return _sensorEngine.scanForward()
    def _print(*args, sep=' ', end='\n', **kw):
        _output.append(sep.join(str(a) for a in args))
    try:
        exec(studentCode, {
            '__builtins__': __builtins__,
            'move': _move, 'turnLeft': _turnLeft,
            'turnRight': _turnRight, 'putPow': _putPow,
            'removePow': _removePow, 'loadPow': _loadPow,
            'unloadPow': _unloadPow, 'removeAmmo': _removeAmmo,
            'shoot': _shoot, 'print': _print,
            'wallAhead': _wallAhead, 'freeAhead': _freeAhead,
            'isAsteroid': _isAsteroid, 'isOpening': _isOpening,
            'isAlien': _isAlien, 'scanForward': _scanForward,
        })
    except SimError: raise
    except SyntaxError as e: raise SimError(f"SyntaxError (Zeile {e.lineno}): {e.msg}")
    except Exception as e:
        line = _student_line(e)
        if line is not None:
            raise SimError(f"{type(e).__name__} (Zeile {line}): {e}")
        raise SimError(f"{type(e).__name__}: {e}")
    if len(collected) > 2000:
        raise SimError("Zu viele Aktionen (max. 2000).")
    engine.actions = collected
    engine.actionIndex = 0
    st = engine.state(f"Programm geladen ({len(collected)} Aktionen).")
    st['output'] = '\n'.join(_output)
    return json.dumps(st)

def stepOnce():
    if not engine.playerAlive:
        return json.dumps(engine.state("❌ Dein Schiff wurde getroffen! Mission fehlgeschlagen."))
    if engine.actionIndex >= len(engine.actions):
        msg = "Programmende."
        if engine.isSolved():
            msg += " ✅ Mission erfuellt!"
        else:
            msg += " ❌ Noch nicht erfuellt. " + engine.statusInfo()
        return json.dumps(engine.state(msg))
    fn = engine.actions[engine.actionIndex]
    engine.actionIndex += 1
    dispatch = {"move": move, "turnLeft": turnLeft, "turnRight": turnRight,
                "putPow": putPow, "removePow": removePow, "loadPow": loadPow,
                "unloadPow": unloadPow, "removeAmmo": removeAmmo, "shoot": shoot}
    dispatch[fn]()
    engine.lastShot = engine.lastShot if fn == "shoot" else None
    if engine.patrols:
        engine.stepAliens()
    msg = f"Ausgefuehrt: {fn}() | " + engine.statusInfo()
    if not engine.playerAlive:
        msg = "❌ Alienschiff hat dich getroffen! Mission fehlgeschlagen."
    elif engine.isSolved():
        msg += " ✅ Mission erfuellt!"
    return json.dumps(engine.state(msg))

def runAll(maxSteps=2000):
    steps = 0
    last = None
    while steps < maxSteps:
        last = json.loads(stepOnce())
        steps += 1
        if not last.get("player_alive", True):
            return json.dumps(last)
        if "Programmende" in last["message"] or "Mission erfuellt" in last["message"]:
            return json.dumps(last)
    raise SimError("Zu viele Schritte (Sicherheitsabbruch).")
