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

    buildIndex (coordsX, coordsY) {
        return 
    }

   /*  placeShip (shipSize, coordsX, coordsY) {
        const index = Number coordsX + coordsY
        this.squares.splice(index, shipSize, "ship"*shipSize) 
        return index
    } */
}
export default GameBoard