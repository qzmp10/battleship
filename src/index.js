import "./style.css";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

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

const playerOne = new Player('player1');
const CPU = new Player('CPU');

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

const playerBoard = document.querySelector('.player-container');
const cpuBoard = document.querySelector('.cpu-container');
const beginBtn = document.querySelector('.begin');
const directionBtn = document.querySelector('.direction');
const announcementDiv = document.querySelector('.announcements');


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
        area.classList.add('hit')
    })
})

let mode = 'vertical';

directionBtn.addEventListener('click', () => {

    if(mode == 'vertical') {
        mode = 'horizontal'
        directionBtn.textContent = 'Switch to Vertical';
    } else {
        mode = 'vertical';
        directionBtn.textContent = 'Switch to Horizontal';
    }


})

beginBtn.addEventListener('click', () => {

    // WHAT IF YOU USE A PLACING VARIABLE EX: let placing = 'cruiser'... THAT LETS YOU CHANGE WHICH SHIP IS BEING PLACED...
    // WHEN ITS DONE, PLACING = EXIT, AND THERE ARE NO MOUSEOVER EFFECTS LEFT AND THE FUNCTION EXITS...
    //T RY THAT SHIT

function playerBattleship() {

    announcementDiv.textContent = 'Place your battleship!';

    playerArea.forEach(area => {

        area.addEventListener('mouseover', () => {
            if(mode == 'vertical') {
                if(area.dataset.idPlayer >= 70) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('selecting');
                }    
            } else {
                
                if(Number(area.dataset.idPlayer.slice(1,2)) + 4 > 10) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('selecting');
                }
            }
        })

        area.addEventListener('mouseout', () => {
            if(mode == 'vertical') {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.remove('selecting', 'error');
            } else {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.remove('selecting', 'error');
            }
        })

        area.addEventListener('click', () => {

            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 4, Number(area.dataset.idPlayer), 'battleship');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('placed');
                return;
            } else {
                playerOne.ownBoard.placeShip('horizontal', 4, Number(area.dataset.idPlayer), 'battleship');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('placed');
                return;
            }
        })
    })
}

function playerCruiser() {

    announcementDiv.textContent = 'Place your cruiser!';

    playerArea.forEach(area => {

        area.addEventListener('mouseover', () => {
            if(mode == 'vertical') {
                if(area.dataset.idPlayer >= 60) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 40}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 40}'`).classList.add('selecting');
                }    
            } else {
                
                if(Number(area.dataset.idPlayer.slice(1,2)) + 5 > 10) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 4}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 4}'`).classList.add('selecting');
                }

            }
        })

        area.addEventListener('mouseout', () => {
            if(mode == 'vertical') {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 40}'`).classList.remove('selecting', 'error');
            } else {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 4}'`).classList.remove('selecting', 'error');
            }
        })

        area.addEventListener('click', () => {

            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerBoard.classList.add('cruiser');
                playerOne.ownBoard.placeShip('vertical', 5, Number(area.dataset.idPlayer), 'cruiser');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 40}'`).classList.add('placed');
                return;
            } else {
                playerBoard.classList.add('cruiser');
                playerOne.ownBoard.placeShip('horizontal', 5, Number(area.dataset.idPlayer), 'cruiser');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 4}'`).classList.add('placed');
                return;
            }   
        })
    })
}

playerCruiser();
playerBattleship();

});



placeCarrier();
placeBattleship();
placeSubmarine();
placeCruiser();
placeDestroyer();












