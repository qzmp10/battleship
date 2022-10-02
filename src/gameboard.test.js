import { board } from "./gameboard"

beforeEach(() => {
    board.gameboard = board.createBoard();
})
test('default gameboard returns w/ no ships & hits, and with 100 positions', () => {
    expect(board.gameboard).toMatchObject([ { ship: false, state: 'intact', position: 0 },
    { ship: false, state: 'intact', position: 1 },
    { ship: false, state: 'intact', position: 2 },
    { ship: false, state: 'intact', position: 3 },
    { ship: false, state: 'intact', position: 4 },
    { ship: false, state: 'intact', position: 5 },
    { ship: false, state: 'intact', position: 6 },
    { ship: false, state: 'intact', position: 7 },
    { ship: false, state: 'intact', position: 8 },
    { ship: false, state: 'intact', position: 9 },
    { ship: false, state: 'intact', position: 10 },
    { ship: false, state: 'intact', position: 11 },
    { ship: false, state: 'intact', position: 12 },
    { ship: false, state: 'intact', position: 13 },
    { ship: false, state: 'intact', position: 14 },
    { ship: false, state: 'intact', position: 15 },
    { ship: false, state: 'intact', position: 16 },
    { ship: false, state: 'intact', position: 17 },
    { ship: false, state: 'intact', position: 18 },
    { ship: false, state: 'intact', position: 19 },
    { ship: false, state: 'intact', position: 20 },
    { ship: false, state: 'intact', position: 21 },
    { ship: false, state: 'intact', position: 22 },
    { ship: false, state: 'intact', position: 23 },
    { ship: false, state: 'intact', position: 24 },
    { ship: false, state: 'intact', position: 25 },
    { ship: false, state: 'intact', position: 26 },
    { ship: false, state: 'intact', position: 27 },
    { ship: false, state: 'intact', position: 28 },
    { ship: false, state: 'intact', position: 29 },
    { ship: false, state: 'intact', position: 30 },
    { ship: false, state: 'intact', position: 31 },
    { ship: false, state: 'intact', position: 32 },
    { ship: false, state: 'intact', position: 33 },
    { ship: false, state: 'intact', position: 34 },
    { ship: false, state: 'intact', position: 35 },
    { ship: false, state: 'intact', position: 36 },
    { ship: false, state: 'intact', position: 37 },
    { ship: false, state: 'intact', position: 38 },
    { ship: false, state: 'intact', position: 39 },
    { ship: false, state: 'intact', position: 40 },
    { ship: false, state: 'intact', position: 41 },
    { ship: false, state: 'intact', position: 42 },
    { ship: false, state: 'intact', position: 43 },
    { ship: false, state: 'intact', position: 44 },
    { ship: false, state: 'intact', position: 45 },
    { ship: false, state: 'intact', position: 46 },
    { ship: false, state: 'intact', position: 47 },
    { ship: false, state: 'intact', position: 48 },
    { ship: false, state: 'intact', position: 49 },
    { ship: false, state: 'intact', position: 50 },
    { ship: false, state: 'intact', position: 51 },
    { ship: false, state: 'intact', position: 52 },
    { ship: false, state: 'intact', position: 53 },
    { ship: false, state: 'intact', position: 54 },
    { ship: false, state: 'intact', position: 55 },
    { ship: false, state: 'intact', position: 56 },
    { ship: false, state: 'intact', position: 57 },
    { ship: false, state: 'intact', position: 58 },
    { ship: false, state: 'intact', position: 59 },
    { ship: false, state: 'intact', position: 60 },
    { ship: false, state: 'intact', position: 61 },
    { ship: false, state: 'intact', position: 62 },
    { ship: false, state: 'intact', position: 63 },
    { ship: false, state: 'intact', position: 64 },
    { ship: false, state: 'intact', position: 65 },
    { ship: false, state: 'intact', position: 66 },
    { ship: false, state: 'intact', position: 67 },
    { ship: false, state: 'intact', position: 68 },
    { ship: false, state: 'intact', position: 69 },
    { ship: false, state: 'intact', position: 70 },
    { ship: false, state: 'intact', position: 71 },
    { ship: false, state: 'intact', position: 72 },
    { ship: false, state: 'intact', position: 73 },
    { ship: false, state: 'intact', position: 74 },
    { ship: false, state: 'intact', position: 75 },
    { ship: false, state: 'intact', position: 76 },
    { ship: false, state: 'intact', position: 77 },
    { ship: false, state: 'intact', position: 78 },
    { ship: false, state: 'intact', position: 79 },
    { ship: false, state: 'intact', position: 80 },
    { ship: false, state: 'intact', position: 81 },
    { ship: false, state: 'intact', position: 82 },
    { ship: false, state: 'intact', position: 83 },
    { ship: false, state: 'intact', position: 84 },
    { ship: false, state: 'intact', position: 85 },
    { ship: false, state: 'intact', position: 86 },
    { ship: false, state: 'intact', position: 87 },
    { ship: false, state: 'intact', position: 88 },
    { ship: false, state: 'intact', position: 89 },
    { ship: false, state: 'intact', position: 90 },
    { ship: false, state: 'intact', position: 91 },
    { ship: false, state: 'intact', position: 92 },
    { ship: false, state: 'intact', position: 93 },
    { ship: false, state: 'intact', position: 94 },
    { ship: false, state: 'intact', position: 95 },
    { ship: false, state: 'intact', position: 96 },
    { ship: false, state: 'intact', position: 97 },
    { ship: false, state: 'intact', position: 98 },
    { ship: false, state: 'intact', position: 99 } ]
  )
})

test('ships exist', () => {
    expect(board.destroyer.zones).toMatchObject({zone1: 'intact', zone2: 'intact'});
    expect(board.submarine.zones).toMatchObject({zone1: 'intact', zone2: 'intact', zone3: 'intact'});
})

test('placing ship horizontally modifies gameboard horizontally', () => {
    board.placeShip('horizontal', 5, 0, 'carrier');

    expect(board.gameboard[0].ship).toBe(true);
    expect(board.gameboard[1].ship).toBe(true);
    expect(board.gameboard[2].ship).toBe(true);
    expect(board.gameboard[3].ship).toBe(true);
    expect(board.gameboard[4].ship).toBe(true);
    expect(board.gameboard[5].ship).toBe(false);
})

test('placing ship vertically modifies gameboard vertically', () => {
    board.placeShip('vertical', 3, 37, 'submarine');
    expect(board.gameboard[37].ship).toBe(true);
    expect(board.gameboard[47].ship).toBe(true);
    expect(board.gameboard[57].ship).toBe(true);
    expect(board.gameboard[67].ship).toBe(false);
})

test('placed ship on gameboard has type property', () => {
    board.placeShip('vertical', 2, 77, 'battleship');
    expect(board.gameboard[77].type).toBe('battleship');
    expect(board.gameboard[87].type).toBe('battleship');
    board.placeShip('horizontal', 3, 12, 'submarine');
    expect(board.gameboard[12].type).toBe('submarine');
    expect(board.gameboard[13].type).toBe('submarine');
    expect(board.gameboard[14].type).toBe('submarine');
})

test('receiveAttack changes gameboard area state', () => {
    board.receiveAttack(77);
    expect(board.gameboard[77].state).toBe('hit');
})

test('receiveAttack checks if position is part of ship', () => {
    board.placeShip('vertical', 5, 14, 'carrier');
    board.placeShip('vertical', 5, 50, 'carrier')
    board.receiveAttack(24);
    expect(board.gameboard[24].ship).toBe(true);
    expect(board.gameboard[90].ship).toBe(true);

})

test('if position is part of ship, receiveAttack also marks the ship zone equivalent to the position', () => {
board.placeShip('horizontal', 3, 35, 'cruiser');
board.placeShip('vertical', 4, 46, 'battleship');
board.receiveAttack(37);
board.receiveAttack(36);
board.receiveAttack(56);
board.receiveAttack(66);
expect(board.cruiser.zones).toMatchObject({zone1: 'intact', zone2: 'hit', zone3: 'hit'});
expect(board.battleship.zones).toMatchObject({zone1: 'intact', zone2: 'hit', zone3: 'hit', zone4: 'intact'});
})

test('if position is not part of ship, returns miss', () => {
    board.placeShip('horizontal', 5, 4, 'carrier');
    board.receiveAttack(17);
    expect(board.gameboard[17].miss).toBe(true);
}) 

test('if not all ships are sunk, return false', () => {
    expect(board.areAllShipsSunk()).toBe(false);
})

test('if all ships are sunk, return true', () => {
    board.carrier.sinkShip();
    board.battleship.sinkShip();
    board.cruiser.sinkShip();
    board.submarine.sinkShip();
    board.destroyer.sinkShip();
    expect(board.areAllShipsSunk()).toBe(true);
})