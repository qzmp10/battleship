export class Ship {
    constructor(length) {
        this.length = length;
        this.zones = this.createZones();
    }

    reset() {
        this.zones = this.createZones();
    }
    
    createZones(zones = this.length) {
        let zonesObject = {};
        for(let i = 0; i < zones; i++) {
            zonesObject[`zone${i + 1}`] = "intact";
        } 
        
        return zonesObject;
    }

    hit(number) {

        if(number > Object.keys(this.zones).length) {
            return this.zones;
        } else {
            this.zones[`zone${number}`] = "hit";
            return this.zones;
        }
    }

    isSunk() {
        if(Object.values(this.zones).every(value => value == "hit")) {
            return true;
        } else {
            return false;
        }
    }
}

export const fourShip = new Ship(4);
export const threeShip = new Ship(3);
export const twoShip = new Ship(2);
export const oneShip = new Ship(1);