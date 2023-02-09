class GameBoard {
    constructor (squares) {
        this.squares = []
    }
    createBoard () {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                this.squares.push([x,y])                
            }
        }return this.squares
    }

    buildIndex (arrayCCs) {
        return Number (arrayCCs.join(''))
    }

    placeShip (shipSize, arrayCCs) {
        const index = Number (arrayCCs.join(''))
        for (let i = 0; i < shipSize; i++) {
            this.squares.splice(index+i, shipSize, "ship")     
            }
        

        return this.squares
    } 
}
export default GameBoard