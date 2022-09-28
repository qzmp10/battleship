import "./style.css";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

async function getNumber() {
    try {
        let firstNumber = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=9&count=1");
        let secondNumber = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=4&count=1");
        const firstjson = await firstNumber.json();
        const secondjson = await secondNumber.json();
        let stringNumber = String(firstjson) + String(secondjson);
        let randomNumber = Number(stringNumber);
        return randomNumber;
    } catch (error) {
        console.log(error);
    }
}

const playerOne = new Player('player1');
const CPU = new Player('CPU');

let startingPosition = await getNumber();

async function placeCarrier() {
    try {
        console.log(startingPosition);
        CPU.ownBoard.placeShip('horizontal', 5, startingPosition, 'carrier');
    } catch (error){
        console.log(error)
    }

}

async function placeBattleship() {
    try{
    if(startingPosition < 30) {
        let battleshipPosition = startingPosition + 11;
        CPU.ownBoard.placeShip('horizontal', 4, battleshipPosition, 'battleship');
        return battleshipPosition;
    } else {
        let battleshipPosition = startingPosition - 19;
        CPU.ownBoard.placeShip('horizontal', 4, battleshipPosition, 'battleship');
        return battleshipPosition;
    }
    } catch (error){
        console.log(error);
    }

}

let secondPosition = await placeBattleship();

async function placeSubmarine() {
    try {
        console.log(secondPosition);
    } catch(error) {
        console.log(error);
    }
}


placeCarrier();
placeBattleship();
placeSubmarine();

const playerBoard = document.querySelector('.player-container');
const cpuBoard = document.querySelector('.cpu-container');

let counter = 0;

playerOne.ownBoard.gameboard.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('intact');
    div.classList.add('area')
    div.classList.add('player');
    div.setAttribute('data-id-player', counter)
    playerBoard.appendChild(div);
    counter += 1;
});

counter = 0;

CPU.ownBoard.gameboard.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('intact');
    div.classList.add('area');
    div.classList.add('cpu');
    div.setAttribute('data-id-cpu', counter)
    cpuBoard.appendChild(div);
    counter += 1;
});

let playerArea = document.querySelectorAll('.player');
let cpuArea = document.querySelectorAll('.cpu');

cpuArea.forEach(area => {
    area.addEventListener('click', () => {
        console.log(area.dataset.idCpu)
        CPU.ownBoard.receiveAttack(area.dataset.idCpu)
        console.log(CPU.ownBoard.gameboard[area.dataset.idCpu]);
    })
})










