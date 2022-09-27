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
    board.placeShip('horizontal', 5, 0);

    expect(board.gameboard[0].ship).toBe(true);
    expect(board.gameboard[1].ship).toBe(true);
    expect(board.gameboard[2].ship).toBe(true);
    expect(board.gameboard[3].ship).toBe(true);
    expect(board.gameboard[4].ship).toBe(true);
    expect(board.gameboard[5].ship).toBe(false);
})

test('placing ship vertically modifies gameboard vertically', () => {
    board.placeShip('vertical', 3, 37);
    expect(board.gameboard[37].ship).toBe(true);
    expect(board.gameboard[47].ship).toBe(true);
    expect(board.gameboard[57].ship).toBe(true);
    expect(board.gameboard[67].ship).toBe(false);
})

