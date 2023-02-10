import { Ship } from "./Ships"

class GameBoard {
    constructor (squares) {
        this.squares = []
        this.Carrier = new Ship("Carrier",5,0,false);
        this.Battleship = new Ship("Battleship",4,0,false);
        this.Cruiser = new Ship("Cruiser",3,0,false);
        this.Submarine = new Ship("Submarine",3,0,false);
        this.Destroyer = new Ship("Destroyer",2,0,false);
    }
    createBoard () {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                this.squares.push([x,y])                
            }
        }return this.squares
    }

    placeShip (shipName, shipSize, arrayCCs, direction) {
        const index = Number (arrayCCs.join(''))
        let vIndex = index
            if (direction === "h") {
                for (let i = 0; i < shipSize; i++) {
                    this.squares.splice(index+i, 1, shipName)                    
                }
            } else if (direction === "v") {
                for (let i = 0; i < shipSize; i++) {
                    this.squares.splice(vIndex, 1, shipName)
                    vIndex+=10                                   
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
            this.Carrier.hit(1);
            if (this.Carrier.isSunk(this.Carrier.length, this.Carrier.hits.length) == false) {
                this.squares.splice(location, 1, "hit")
            }  else {this.squares.splice(location, 1, "sunk")}

        } else if (this.squares[location] === "Battleship") {
            this.Battleship.hit(1);
            if (this.Battleship.isSunk(this.Battleship.length, this.Battleship.hits.length) == false) {
                this.squares.splice(location, 1, "hit")
            }  else {this.squares.splice(location, 1, "sunk")}
        } else if (this.squares[location] === "Cruiser") {
            this.Cruiser.hit(1);
            if (this.Cruiser.isSunk(this.Cruiser.length, this.Cruiser.hits.length) == false) {
                this.squares.splice(location, 1, "hit")
            }  else {this.squares.splice(location, 1, "sunk")}            
        } else if (this.squares[location] === "Submarine") {
            this.Submarine.hit(1);
            if (this.Submarine.isSunk(this.Submarine.length, this.Submarine.hits.length) == false) {
                this.squares.splice(location, 1, "hit")
            }  else {this.squares.splice(location, 1, "sunk")}            
        } else if (this.squares[location] === "Destroyer") {
            this.Destroyer.hit(1);
            if (this.Destroyer.isSunk(this.Destroyer.length, this.Destroyer.hits.length) == false) {
                this.squares.splice(location, 1, "hit")
            }  else {this.squares.splice(location, 1, "sunk")}            
        }            
    }  
}

/* buildIndex (arrayCCs) {
        return Number (arrayCCs.join(''))
    } 
     
    
    itinerateArr () {
        for (let i = 0; i < this.squares.length; i++) {
            if (this.squares[i] ) {
                
            }
            
        }
    }
        
    
    */

export default GameBoard