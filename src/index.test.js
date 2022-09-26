import { fourShip } from "./ship"

test('new Ship returns correct length', () => {
    expect(fourShip.length).toBe(4);
}) 

test('new Ship returns amount of zones equal to height', () => {
    expect(fourShip.createZones()).toMatchObject({
        zone1: "", 
        zone2: "",
        zone3: "",
        zone4: "",
    })
})