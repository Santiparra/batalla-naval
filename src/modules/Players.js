import GameBoard from "./Gameboard"

class Player {
    constructor (turn) {
        this.turn = turn
        this.AIBoard = new GameBoard
        this.HumanBoard = new GameBoard
    }
}
export default Player