import { Ship } from "./ship"

export class Gameboard {

    constructor() {
        this.gameboard = this.createBoard();
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.cruiser = new Ship(3);
        this.submarine = new Ship(3);
        this.destroyer = new Ship(2);
    }

    createBoard() {
        let gameboard = [];
        for(let i= 0; i < 100; i++) {
            gameboard.push({ship: false, state: "intact", position: i})
        }
        return gameboard;
    }

    placeShip(direction, length, startingPosition, type) {
        
        let tempPosition = startingPosition;

        if(length < 2 || length > 5) {
            return;
        }
    
        if(direction == 'horizontal') {

            //math to not exceed gameboard

            if(startingPosition >= 10) {
                while(10 < tempPosition) {
                    if(tempPosition % 10 == 0) {
                        tempPosition / 10;
                    } else {
                        tempPosition %= 10;
                    }
                }
            }

           //dont exceed gameboard
            if(length > 10 - tempPosition) {
                return;
            }

            for(let i = 0; i < length; i++) {
                if(i == 0) {
                    this.gameboard[startingPosition].ship = true;
                    this.gameboard[startingPosition].type = type;
                } else {
                    this.gameboard[startingPosition + i].ship = true;
                    this.gameboard[startingPosition + i].type = type;
                }

            }
        }

        if(direction == 'vertical') {

            if(length * 10 >= (100 - startingPosition)) {
                return;
            }

            for(let i = 0; i < length; i++) {
                this.gameboard[startingPosition + (10 * i)].ship = true;
                this.gameboard[startingPosition + (10 * i)].type = type;
            }
        }

    }

    receiveAttack(position) {

        let hitIndexArray = [];
        this.gameboard[position].state = 'hit';


        if(this.gameboard[position].ship == true) {
            
            let shipType = this.gameboard[position].type;
            let shipArray = this.gameboard.filter(value => value.type == `${shipType}`);

            for (const key of shipArray) {
                if(key.state == 'hit') {
                    hitIndexArray.push(shipArray.indexOf(key));
                }
            }

            if(hitIndexArray.length != 0) {

                if(shipType == 'carrier') {

                    for(const key of hitIndexArray) {
                        (this.carrier.zones[`zone${key + 1}`]) = 'hit';
                    }
    
                } else if (shipType == 'battleship') {
    
                    for(const key of hitIndexArray) {
                        (this.battleship.zones[`zone${key + 1}`]) = 'hit';
                    }
    
                } else if (shipType == 'submarine') {
    
                    for(const key of hitIndexArray) {
                        (this.submarine.zones[`zone${key + 1}`]) = 'hit';
                    }
    
                } else if (shipType == 'cruiser') {
    
                    for(const key of hitIndexArray) {
                        (this.cruiser.zones[`zone${key + 1}`]) = 'hit';
                    }
    
                } else if (shipType == 'destroyer') {
    
                    for(const key of hitIndexArray) {
                        (this.destroyer.zones[`zone${key + 1}`]) = 'hit';
                    }
    
                }

            }
        } else {
            this.gameboard[position].miss = true;
        }

    }

    areAllShipsSunk() {

        if(Object.values(this.carrier.zones).every(value => value == 'hit') &&
        Object.values(this.battleship.zones).every(value => value == 'hit') &&
        Object.values(this.cruiser.zones).every(value => value == 'hit') &&
        Object.values(this.submarine.zones).every(value => value == 'hit') &&
        Object.values(this.destroyer.zones).every(value => value == 'hit')) {
            return true;
        } else {
            return false;
        }
    }
}

export const board = new Gameboard();