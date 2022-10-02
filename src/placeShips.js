import { startGame } from "./startGame"
import { playerArea, announcementDiv } from "./index";
import { playerOne} from "./index"
import { mode } from "./index"

export function placeShips() {
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
            announcementDiv.textContent = 'NOW ATTACK THE ENEMY SHIP!';
            startGame();
            return;
        }
    });

    
});
}