import { Ship } from "./Ships"

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

    /* buildIndex (arrayCCs) {
        return Number (arrayCCs.join(''))
    } */

    placeShip (shipSize, arrayCCs) {
        const index = Number (arrayCCs.join(''))
        for (let i = 0; i < shipSize; i++) {
            this.squares.splice(index+i, shipSize, new Ship(shipSize))     
            }
        return this.squares
    } 
    //takes a pair of coordinates, determines whether or not 
    //the attack hit a ship and then sends the ‘hit’ function to 
    //the correct ship, or records the coordinates of the missed shot.
    receiveAttack (coords){
        const location = Number (coords.join(''))
        if (this.squares[location].typeoff !== String &&
            this.squares[location] !== 'ship') {
            this.squares.splice(location, 1, "water")
        }
        if (this.squares[location] === 'ship') {
            Ship.hit(coords)
        }
    }
}
export default GameBoard