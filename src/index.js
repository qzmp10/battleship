import "./style.css";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { playerBoard, cpuBoard, areas } from "./dom";


const playerOne = new Player('player1');
const CPU = new Player('CPU');

let counter = 0;

playerOne.ownBoard.gameboard.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('intact');
    div.classList.add('area')
    div.setAttribute('data-id', counter)
    playerBoard.appendChild(div);
    counter += 1;

 
});






