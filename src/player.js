import { Gameboard } from "./gameboard";

export class Player{

    constructor(name) {
        this.name = name;
        this.ownBoard = new Gameboard();
    }

    attackCPU(position, enemyBoard) {
            enemyBoard.receiveAttack(position);
    }

    attackPlayer(enemyBoard, position = Math.floor(Math.random() * 100)) {
        enemyBoard.receiveAttack(position);
        return position;
    }
}