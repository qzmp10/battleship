import { CPU, playerOne } from "./index";
import { cpuArea } from "./index";
import { resetGame } from "./resetGame";

export function startGame() {
    
    let previousNumber = 0;
    let placeHolder = 0;
    let previousAttack = 'miss';
    let hitArray = []
    let counter = 0;

    cpuArea.forEach(cArea => {

        cArea.addEventListener('click', () => {

            CPU.ownBoard.receiveAttack(cArea.dataset.idCpu)
            if(CPU.ownBoard.gameboard[cArea.dataset.idCpu].ship == false) {
                cArea.classList.add('miss');
            } else {
                cArea.classList.add('hit');
            }
            if(CPU.ownBoard.areAllShipsSunk()) {
                alert('Player 1 wins!');
                resetGame();
            }
            
            if(previousAttack == 'miss') {
                let randomNumber = Math.floor(Math.random() * 100);
                while(hitArray.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * 100);
                }
                hitArray.push(randomNumber);
                previousNumber = randomNumber;
                playerOne.ownBoard.receiveAttack(randomNumber);
                if(playerOne.ownBoard.gameboard[randomNumber].ship == false) {
                    document.querySelector(`[data-id-player='${randomNumber}'`).classList.add('miss');
                    previousAttack = 'miss';
                } else {
                    document.querySelector(`[data-id-player='${randomNumber}'`).classList.add('hit');
                    previousAttack = 'hit';
                }  
            } 
            
            else {

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
                        hitArray.push(x);

                        if(playerOne.ownBoard.gameboard[x].ship == false) {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('miss');
                        } else {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('hit');
                        }  
                        counter +=1;
                        return;
                    } 

                    else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                        hitArray.push(placeHolder);


                        if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                        } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                        }  
                        counter += 1;
                        return;   
                    }
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
                        hitArray.push(x);

                        if(playerOne.ownBoard.gameboard[x].ship == false) {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('miss');
                        } else {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('hit');
                        }  
                        counter +=1;
                        return;
                    } 
                    
                    else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                        hitArray.push(placeHolder);

                        if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                        } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                        }  
                        counter += 1;
                        return;   
                    }
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
                        hitArray.push(x);

                        if(playerOne.ownBoard.gameboard[x].ship == false) {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('miss');
                        } else {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('hit');
                        }  
                        counter +=1;
                        return;
                    } 
                    
                    else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                        hitArray.push(placeHolder);

                        if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');
                        } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');
                        }  
                        counter += 1;
                        return;   
                    }
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
                        hitArray.push(x);

                        if(playerOne.ownBoard.gameboard[x].ship == false) {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('miss');

                            previousAttack = 'miss';
                        } else {
                            document.querySelector(`[data-id-player='${x}'`).classList.add('hit');

                            previousAttack = 'hit';
                        }  

                        counter = 0;
                        return;
                    } 
                    
                    else {
                        playerOne.ownBoard.receiveAttack(placeHolder);
                        hitArray.push(placeHolder);

                        if(playerOne.ownBoard.gameboard[placeHolder].ship == false) {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('miss');

                        previousAttack = 'miss';
                        } else {
                        document.querySelector(`[data-id-player='${placeHolder}'`).classList.add('hit');

                        previousAttack = 'hit';
                        }  
                        counter = 0;
                        return;   
                    }
                }
            }   
            
            if(playerOne.ownBoard.areAllShipsSunk()) {
                alert('CPU wins!');
                resetGame();
            }
        })
    });
};

