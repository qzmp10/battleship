export class Ship {
    constructor(length) {
        this.length = length;
        this.zones = this.createZones();
    }
    
    createZones(zones = this.length) {
        let zonesObject = {};
        for(let i = 0; i < zones; i++) {
            zonesObject[`zone${i + 1}`] = "";
        } 
        
        return zonesObject;
    }
}

export const fourShip = new Ship(4);
export const threeShip = new Ship(3);
export const twoShip = new Ship(2);
export const oneShip = new Ship(1);