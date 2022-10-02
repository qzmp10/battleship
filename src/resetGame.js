import { playerArea, cpuArea } from "./index"
import { playerOne, CPU } from "./index"
import { Player } from "./player"

export function resetGame() {

    playerOne = new Player('Player 1');
    CPU = new Player('CPU')

    playerArea.forEach(area => {
        area.classList.remove('hit');
        area.classList.remove('miss');
        area.classList.remove('placed');
    })

    cpuArea.forEach(area => {
        area.classList.remove('hit');
        area.classList.remove('miss');
        area.classList.remove('placed');
    })
}