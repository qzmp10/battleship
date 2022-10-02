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

//GOD FORGIVE ME FOR THIS UGLY BLOCK OF CODE
let placing = 'carrier';

announcementDiv.textContent = 'Place your carrier!';

playerArea.forEach(area => {

    if(placing == 'done') {
        return;
    }

    area.addEventListener('mouseover', () => {

        if(placing == 'carrier') {

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

        }  
        if(placing == 'battleship') {

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

        }
        if(placing == 'submarine') {

            if(mode == 'vertical') {
                if(area.dataset.idPlayer >= 80) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('selecting');
                }    
            } else {
                
                if(Number(area.dataset.idPlayer.slice(1,2)) + 3 > 10) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('selecting');
                }
            }

        }
        if(placing == 'cruiser') {

            if(mode == 'vertical') {
                if(area.dataset.idPlayer >= 80) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('selecting');
                }    
            } else {
                
                if(Number(area.dataset.idPlayer.slice(1,2)) + 3 > 10) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('selecting');
                }
            }
        }
        if(placing == 'destroyer') {

            if(mode == 'vertical') {
                if(area.dataset.idPlayer >= 90) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('selecting');
                }    
            } else {
                
                if(Number(area.dataset.idPlayer.slice(1,2)) + 2 > 10) {
                    area.classList.add('error');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('error');
                } else {
                    area.classList.add('selecting');
                    document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('selecting');
                }
            }
        }
    })

    area.addEventListener('mouseout', () => {
        if(placing == 'carrier') {
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
        }
        if(placing == 'battleship') {
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
        }
        if(placing == 'submarine') {
            if(mode == 'vertical') {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.remove('selecting', 'error');
            } else {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.remove('selecting', 'error');
            }
        }
        if(placing == 'cruiser') {
            if(mode == 'vertical') {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.remove('selecting', 'error');
            } else {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.remove('selecting', 'error');
            }
        }
        if(placing == 'destroyer') {
            console.log(placing);

            if(mode == 'vertical') {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.remove('selecting', 'error');
            } else {
                area.classList.remove('selecting', 'error');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.remove('selecting', 'error');
            }
        }
    });

    area.addEventListener('click', () => {

        if(area.classList.contains('placed')) {
            return;
        }

        if(placing == 'carrier') {

            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 5, Number(area.dataset.idPlayer), 'carrier');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 40}'`).classList.add('placed');
            } else {
                playerOne.ownBoard.placeShip('horizontal', 5, Number(area.dataset.idPlayer), 'carrier');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 4}'`).classList.add('placed');
            }   

            placing = 'battleship';
            announcementDiv.textContent = 'Place your battleship!';
            return;
        }  

        if(placing == 'battleship') {

            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 4, Number(area.dataset.idPlayer), 'battleship');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 30}'`).classList.add('placed');
            } else {
                playerOne.ownBoard.placeShip('horizontal', 4, Number(area.dataset.idPlayer), 'battleship');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 3}'`).classList.add('placed');
            }

            placing = 'submarine';
            announcementDiv.textContent = 'Place your submarine!';
            return;
        }
        if(placing == 'submarine') {

            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 3, Number(area.dataset.idPlayer), 'submarine');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
            } else {
                playerOne.ownBoard.placeShip('horizontal', 3, Number(area.dataset.idPlayer), 'submarine');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
            }

            placing = 'cruiser';
            announcementDiv.textContent = 'Place your cruiser!';
            return;
        }
        if(placing == 'cruiser') {
            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 3, Number(area.dataset.idPlayer), 'cruiser');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 20}'`).classList.add('placed');
            } else {
                playerOne.ownBoard.placeShip('horizontal', 3, Number(area.dataset.idPlayer), 'cruiser');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 2}'`).classList.add('placed');
            }
            placing = 'destroyer';
            announcementDiv.textContent = 'Place your destroyer!';
            return;
        }
        if(placing == 'destroyer') {
            if(area.classList.contains('error')) {
                return;
            }

            if(mode == 'vertical') {
                playerOne.ownBoard.placeShip('vertical', 2, Number(area.dataset.idPlayer), 'destroyer');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 10}'`).classList.add('placed');
            } else {
                playerOne.ownBoard.placeShip('horizontal', 2, Number(area.dataset.idPlayer), 'destroyer');
                area.classList.add('placed');
                document.querySelector(`[data-id-player='${Number(area.dataset.idPlayer) + 1}'`).classList.add('placed');
            }
            placing = 'done';
            announcementDiv.textContent = 'TIME TO ATTACK THE ENNEMY SHIP!';
            startGame();
            return;
        }
    })
});



placeCarrier();
placeBattleship();
placeSubmarine();
placeCruiser();
placeDestroyer();

let previousNumber = 0;
let placeHolder = 0;
let previousAttack = 'miss';
let hitArray = []
counter = 0;

function startGame() {
    
    cpuArea.forEach(cArea => {

        cArea.addEventListener('click', () => {
            console.log(cArea.dataset.idCpu)
            CPU.ownBoard.receiveAttack(cArea.dataset.idCpu)
            console.log(CPU.ownBoard.gameboard[cArea.dataset.idCpu]);
            if(CPU.ownBoard.gameboard[cArea.dataset.idCpu].ship == false) {
                cArea.classList.add('miss');
            } else {
                cArea.classList.add('hit');
            }


            
            if(previousAttack == 'miss') {
                let randomNumber = Math.floor(Math.random() * 100);
                while(hitArray.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * 100);
                }
                hitArray.push(randomNumber);
                previousNumber = randomNumber;
                playerOne.ownBoard.receiveAttack(randomNumber);
                console.log(playerOne.ownBoard.gameboard[randomNumber]);
                if(playerOne.ownBoard.gameboard[randomNumber].ship == false) {
                    document.querySelector(`[data-id-player='${randomNumber}'`).classList.add('miss');
                    previousAttack = 'miss';
                } else {
                    document.querySelector(`[data-id-player='${randomNumber}'`).classList.add('hit');
                    previousAttack = 'hit';
                }  
            } else {
                if(counter == 0) {
                    let i = 1;
                    let x = Math.floor(Math.random() * 100);
                    placeHolder = previousNumber + 1;
                    while(hitArray.includes(placeHolder)) {
                        placeHolder = (placeHolder + i);
                        i++;
                    }

                    if(placeHolder < 0 || placeHolder > 99) {
                        while(hitArray.includes(x)) {
                            x = Math.floor(Math.random() * 100);
                        }
                        playerOne.ownBoard.receiveAttack(x);
                    } else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                    }
                    

                    if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                    } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                    }  
                    counter +=1;
                    return;
                } 
                if(counter == 1) {
                    let i = 1;
                    let x = Math.floor(Math.random() * 100);
                    placeHolder = previousNumber - 1;
                    while(hitArray.includes(placeHolder)) {
                        placeHolder = (placeHolder - i);
                        i++;
                    }

                    if(placeHolder < 0 || placeHolder > 99) {
                        while(hitArray.includes(x)) {
                            x = Math.floor(Math.random() * 100);
                        }
                        playerOne.ownBoard.receiveAttack(x);
                    } else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                    }

                    if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                    } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                    }  
                    counter += 1;
                    return;
                }
                if(counter == 2) {
                    let i = 1;
                    let x = Math.floor(Math.random() * 100);
                    placeHolder = previousNumber + 10;
                    while(hitArray.includes(placeHolder)) {
                        placeHolder = (placeHolder + (i * 10));
                        i++;
                    }

                    if(placeHolder < 0 || placeHolder > 99) {
                        while(hitArray.includes(x)) {
                            x = Math.floor(Math.random() * 100);
                        }
                        playerOne.ownBoard.receiveAttack(x);
                    } else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                    }

                    if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                    } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                    }  
                    counter += 1;
                    return;
                }
                if(counter == 3) {
                    let i = 1;
                    let x = Math.floor(Math.random() * 100);
                    placeHolder = previousNumber - 10;
                    while(hitArray.includes(placeHolder)) {
                        placeHolder = (placeHolder - (i * 10));
                        i++;
                    }

                    if(placeHolder < 0 || placeHolder > 99) {
                        while(hitArray.includes(x)) {
                            x = Math.floor(Math.random() * 100);
                        }
                        playerOne.ownBoard.receiveAttack(x);
                    } else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                    }
                    
                    if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                    } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                    }  
                    previousAttack = 'miss';
                    counter = 0;
                    return;
                }

            }



        })
    });
};
























