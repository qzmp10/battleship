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

    placeShip(direction, length, startingPosition) {

        if(direction == 'horizontal') {
            for(let i = 0; i < length; i++) {
                if(i == 0) {
                    this.gameboard[startingPosition].ship = true;
                } else {
                    this.gameboard[startingPosition + i].ship = true;
                }

            }
        }

        if(direction == 'vertical') {
            for(let i = 0; i < length; i++) {
                this.gameboard[startingPosition + (10 * i)].ship = true;
            }
        }

    }
}

export const board = new Gameboard();