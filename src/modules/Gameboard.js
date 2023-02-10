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
    createShips () {
        const Carrier = new Ship("Carrier",5,0,false);
        const Battleship = new Ship("Battleship",4,0,false);
        const Cruiser = new Ship("Cruiser",3,0,false);
        const Submarine = new Ship("Submarine",3,0,false);
        const Destroyer = new Ship("Destroyer",2,0,false);
    }

    placeShip (shipName, shipSize, arrayCCs, direction) {
        const index = Number (arrayCCs.join(''))
        for (let i = 0; i < shipSize; i++) {
            if (direction === "h") {
                this.squares.splice(index+i, shipSize, shipName)
            } else if (direction === "v") {
                this.squares.splice((index+i)+10, shipSize, shipName)
            }
        }
        return this.squares
    } 


    //takes a pair of coordinates, determines whether or not 
    //the attack hit a ship and then sends the ‘hit’ function to 
    //the correct ship, or records the coordinates of the missed shot.
    receiveAttack (coords){
        const location = Number (coords.join(''))        
        if (this.squares[location].length == 2) {
            this.squares.splice(location, 1, "water")
        } else if (this.squares[location] === "Carrier") {
            this.squares.splice(location, 1, "hit")
        } else if (this.squares[location] === "Battleship") {
            this.squares.splice(location, 1, "hit")
        } else if (this.squares[location] === "Cruiser") {
            this.squares.splice(location, 1, "hit")
        } else if (this.squares[location] === "Submarine") {
            this.squares.splice(location, 1, "hit")
        } else if (this.squares[location] === "Destroyer") {
            this.squares.splice(location, 1, "hit")
        }
        
        
    }

    itinerateArr () {
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i] ) {
                
            }
            
        }
    }
}
export default GameBoard