import { fourShip, threeShip, twoShip, oneShip } from "./ship"

beforeEach(() => {
    oneShip.reset();
    twoShip.reset();
    threeShip.reset();
    fourShip.reset();
})

test('Ship returns correct length', () => {
    expect(fourShip.length).toBe(4);
});

test('Ship returns amount of zones equal to height', () => {
    expect(Object.keys(twoShip.zones)).toMatchObject(["zone1", "zone2"])
});

test('Ship zones are intact by default', () => {
    expect(Object.values(threeShip.zones)).toMatchObject(["intact", "intact", "intact"])
});

test('Ship zone value switches from intact to hit when hit', () => {
    expect(oneShip.hit(1)).toMatchObject({zone1: 'hit'});
}); 

test('if Ship is hit on a non-existent zone, other zones stay intact', () => {
    expect(twoShip.hit(3)).toMatchObject({zone1: 'intact', zone2: 'intact'});
});

test('if atleast one zone value is intact, isSunk returns false', () => {
    fourShip.hit(1);
    fourShip.hit(2);
    fourShip.hit(3);
    expect(fourShip.isSunk()).toBe(false);
}) 

test('if all zone values are hit, isSunk returns true', () => {
    fourShip.hit(1);
    fourShip.hit(2);
    fourShip.hit(3);
    fourShip.hit(4);
    expect(fourShip.isSunk()).toBe(true);
}) 

test('sinkShip works', () => {
    twoShip.sinkShip();
    expect(twoShip.zones).toMatchObject({zone1: 'hit', zone2: 'hit'});
})

    
