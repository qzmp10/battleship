import "./style.css";
import { Player } from "./player";
import { placeShips } from "./placeShips";

// probably could have made one async function that returned multiple numbers but whats done is done...
async function getNumber() {
    try {
        let number = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=9&count=1");
        const randomNumber = await number.json();
        return Number(randomNumber);
    } catch (error) {
        console.log(error);
    }
}

async function getNumber2() {
    try {
        let number = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=6&max=9&count=1");
        const randomNumber = await number.json();
        return Number(randomNumber);
    } catch (error) {
        console.log(error);
    }
}

async function getNumber3() {
    try {
        let number = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=94&max=97&count=1");
        const randomNumber = await number.json();
        return Number(randomNumber);
    } catch (error) {
        console.log(error);
    }
}

async function getNumber4() {
    try {
        let number = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=91&max=94&count=1");
        const randomNumber = await number.json();
        return Number(randomNumber);
    } catch (error) {
        console.log(error);
    }
}

export let playerOne = new Player('player1');
export let CPU = new Player('CPU');

let startingPosition = await getNumber();
console.log(startingPosition);

async function getCruiserAndDestroyerNumbers() {

    try {
        if(startingPosition < 5) {

            let cruiserPosition = await getNumber3();
            let destroyerPosition = (await getNumber2() * 10) + 1;
            return { cruiserPosition, destroyerPosition };

        } else if (startingPosition >= 5) {

            let cruiserPosition = await getNumber4();
            let destroyerPosition  = (await getNumber2() * 10) + 8;

            return { cruiserPosition, destroyerPosition };

        }
    } catch (error) {
        console.log(error);
    }
}


async function placeCarrier() {
    try {
        CPU.ownBoard.placeShip('vertical', 5, startingPosition, 'carrier');
    } catch(error) {
        console.log(error);
    }
}

async function placeBattleship() {
    try {
        if(startingPosition < 5) {
            let position = startingPosition + 33;
            CPU.ownBoard.placeShip('vertical', 4, position, 'battleship');
        } else {
            let position = startingPosition + 27;
            CPU.ownBoard.placeShip('vertical', 4, position, 'battleship');
        }

    } catch(error) {
        console.log(error);
    }
}

async function placeSubmarine() {
    try {
        if(startingPosition < 5) {
            let position = startingPosition + 25;
            CPU.ownBoard.placeShip('vertical', 3, position, 'submarine');
        } else {
            let position = startingPosition + 15;
            CPU.ownBoard.placeShip('vertical', 3, position, 'submarine');
        }

    } catch(error) {
        console.log(error);
    }
}

async function placeCruiser() {
    try {
        let position = await getCruiserAndDestroyerNumbers();
        console.log(position['cruiserPosition']);
        CPU.ownBoard.placeShip('horizontal', 3, position['cruiserPosition'], 'cruiser');
    } catch(error) {
        console.log(error);
    }
}

async function placeDestroyer() {
    try {
        let position = await getCruiserAndDestroyerNumbers();
        console.log(position['destroyerPosition']);
        CPU.ownBoard.placeShip('horizontal', 2, position['destroyerPosition'], 'destroyer');
    } catch(error) {
        console.log(error);
    }
}

export const playerBoard = document.querySelector('.player-container');
export const cpuBoard = document.querySelector('.cpu-container');
const directionBtn = document.querySelector('.direction');
export const announcementDiv = document.querySelector('.announcements');


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

export let playerArea = document.querySelectorAll('.player');
export let cpuArea = document.querySelectorAll('.cpu');

export let mode = 'vertical';
directionBtn.addEventListener('click', () => {

    if(mode == 'vertical') {
        mode = 'horizontal'
        directionBtn.textContent = 'Switch to Vertical';
    } else {
        mode = 'vertical';
        directionBtn.textContent = 'Switch to Horizontal';
    }
});




placeCarrier();
placeBattleship();
placeSubmarine();
placeCruiser();
placeDestroyer();

placeShips();


























