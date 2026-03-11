import json
import traceback

MISSION_ID = "m1-01"

class SimError(Exception): 
    pass

class Engine:
    def __init__(self):
        self.gridW = 15
        self.gridH = 15
        self.startX, self.startY, self.startDir = 7, 2, "N"
        self.goalX, self.goalY = 7, 12
        self.hasGoal = True
        self.initAsteroids = []
        self.initOpenings = []
        self.initFieldPow = []
        self.initStations = []
        self.initAliens = []
        self.initAmmo = []
        self.initPlayerPow = 0
        self.initPlayerAmmo = 0
        self.closeN = 0
        self.destroyN = 0
        self.collectN = 0
        self.deliverN = 0
        self.reset()

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
        self.actions = []
        self.actionIndex = 0

        # Initialize station collision and dock zones
        # Stations are 4x3 cells, positioned at [x, y] with optional type [x, y, type]
        # Dock is on the right-middle cell (x+3, y+1)
        self.stationDocks = set()
        self.stationCollision = set()
        for s in self.initStations:
            sx, sy = s[0], s[1]  # Station base position, ignoring type if present
            # Station occupies: x to x+3 (4 wide), y to y+2 (3 high)
            for dx in range(4):
                for dy in range(3):
                    self.stationCollision.add((sx + dx, sy + dy))
            # Dock position: right-middle of the station
            self.stationDocks.add((sx + 3, sy + 1))

    def _forward(self):
        return {"N":(0,1),"E":(1,0),"S":(0,-1),"W":(-1,0)}[self.dir]

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

    def loadPow(self):
        pos = (self.x, self.y)
        if pos not in self.stationDocks:
            raise SimError(f"FEHLER: loadPow() - Kein Stations-Dock auf ({self.x},{self.y})!")
        self.playerPow += 1
        self.tick += 1

    def unloadPow(self):
        pos = (self.x, self.y)
        if pos not in self.stationDocks:
            raise SimError(f"FEHLER: unloadPow() - Kein Stations-Dock auf ({self.x},{self.y})!")
        if self.playerPow <= 0:
            raise SimError("FEHLER: unloadPow() - Kein PowerUp im Inventar!")
        self.playerPow -= 1
        self.delivered += 1
        self.tick += 1

    def removeAmmo(self):
        pos = (self.x, self.y)
        if pos not in self.fieldAmmo:
            raise SimError(f"FEHLER: removeAmmo() - Keine Munition auf ({self.x},{self.y})!")
        self.fieldAmmo.discard(pos)
        self.playerAmmo += 1
        self.tick += 1

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
            "hit_alien": list(hitAlien) if hitAlien else None
        }
        self.tick += 1

    def isSolved(self):
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
            "solved": self.isSolved(),
            "message": msg
        }

engine = Engine()

def move(): engine.move()
def turnLeft(): engine.turnLeft()
def turnRight(): engine.turnRight()
def putPow(): engine.putPow()
def removePow(): engine.removePow()
def loadPow(): engine.loadPow()
def unloadPow(): engine.unloadPow()
def removeAmmo(): engine.removeAmmo()
def shoot(): engine.shoot()

ALLOWED_CALLS = ["move"]

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
    def _move(): collected.append("move")
    def _turnLeft(): collected.append("turnLeft")
    def _turnRight(): collected.append("turnRight")
    def _putPow(): collected.append("putPow")
    def _removePow(): collected.append("removePow")
    def _loadPow(): collected.append("loadPow")
    def _unloadPow(): collected.append("unloadPow")
    def _removeAmmo(): collected.append("removeAmmo")
    def _shoot(): collected.append("shoot")
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
    msg = f"Ausgefuehrt: {fn}() | " + engine.statusInfo()
    if engine.isSolved():
        msg += " ✅ Mission erfuellt!"
    return json.dumps(engine.state(msg))

def runAll(maxSteps=2000):
    steps = 0
    last = None
    while steps < maxSteps:
        last = json.loads(stepOnce())
        steps += 1
        if "Programmende" in last["message"] or "Mission erfuellt" in last["message"]:
            return json.dumps(last)
    raise SimError("Zu viele Schritte (Sicherheitsabbruch).")
