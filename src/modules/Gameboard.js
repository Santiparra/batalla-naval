import { Ship } from "./Ships"

class GameBoard {
    constructor (squares, placedShips) {
        this.squares = []
        this.placedShips = 0 
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
        this.placedShips++       
        return this.squares
    } 

    checkWin () {
        if (this.Carrier.isSunk(this.Carrier.length, this.Carrier.hits.length) == true &&
            this.Battleship.isSunk(this.Battleship.length, this.Battleship.hits.length) == true &&
            this.Cruiser.isSunk(this.Cruiser.length, this.Cruiser.hits.length) == true &&
            this.Submarine.isSunk(this.Submarine.length, this.Submarine.hits.length) == true &&
            this.Destroyer.isSunk(this.Destroyer.length, this.Destroyer.hits.length) == true) {
                return true
        } else return false
        }
    
    receiveAttack (coords){
        const location = Number (coords.join(''))        
        if (this.squares[location].length == 2) {
           return this.squares.splice(location, 1, "water")
        } else if (this.squares[location] === "Carrier") {
            this.Carrier.hit(1);
            if (this.Carrier.isSunk(this.Carrier.length, this.Carrier.hits.length) == false) {
                return this.squares.splice(location, 1, "hit")
            }  else { return this.squares.splice(location, 1, "sunk")}

        } else if (this.squares[location] === "Battleship") {
            this.Battleship.hit(1);
            if (this.Battleship.isSunk(this.Battleship.length, this.Battleship.hits.length) == false) {
                return this.squares.splice(location, 1, "hit")
            }  else { return this.squares.splice(location, 1, "sunk")}
        } else if (this.squares[location] === "Cruiser") {
            this.Cruiser.hit(1);
            if (this.Cruiser.isSunk(this.Cruiser.length, this.Cruiser.hits.length) == false) {
                return this.squares.splice(location, 1, "hit")
            }  else {return this.squares.splice(location, 1, "sunk")}            
        } else if (this.squares[location] === "Submarine") {
            this.Submarine.hit(1);
            if (this.Submarine.isSunk(this.Submarine.length, this.Submarine.hits.length) == false) {
                return this.squares.splice(location, 1, "hit")
            }  else { return this.squares.splice(location, 1, "sunk")}            
        } else if (this.squares[location] === "Destroyer") {
            this.Destroyer.hit(1);
            if (this.Destroyer.isSunk(this.Destroyer.length, this.Destroyer.hits.length) == false) {
                return this.squares.splice(location, 1, "hit")
            }  else { return this.squares.splice(location, 1, "sunk")}            
        }            
    }

    randomPlacer (ship) {
        let shipObj = this.ship
        let randomOri = Math.random() < 0.5
        let ori = true
        let randomI = Math.floor(Math.random() * 100)
        for (let i = 0; i < ship.length; i++) {
            if (ori) {
               console.log(this.squares[Number(randomI)  + i])
            }
            
        }
    }


    placedShipsCounter () {
        let nextShipName;
        if (this.placedShips === 0) {
            nextShipName = "Carrier"
        } else if (this.placedShips === 1) {
            nextShipName = "Battleship"
        } else if (this.placedShips === 2) {
            nextShipName = "Cruiser"
        } else if (this.placedShips === 3 ) {
            nextShipName = "Submarine"
        } else if (this.placedShips === 4) {
            nextShipName = "Destroyer"
        }
        return nextShipName
    }

    generateArr(index) {
        return Array.from(String(index), Number)
    }

    /* placementBuilder () {
        let nextShipName = this.placedShipsCounter()
        let dir = this.randomDir()
        let coords = getRandomI()
        if (nextShipName == "Carrier" && isValid (dir,  coords, 5) === true) {
            placeShip (nextShipName, 5, [x,y], dir)
        } else if (nextShipName == "Battleship" && isValid (dir,  coords, 4) === true) {
            
        } else if (nextShipName == "Cruiser" && isValid (dir,  coords, 3) === true)  {
            
        } else if (nextShipName == "Submarine" && isValid (dir,  coords, 3) === true) {
            
        } else if (nextShipName == "Destroyer" && isValid (dir,  coords, 2) === true) {
            
        }
        placeShip (this.placedShipsCounter(), shipSize, arrayCCs, direction)
    }

    randomDir () {
        let randomOri = Math.random() < 0.5
        return randomOri
    }

    getRandomI () {
        let xAxis = Math.floor(Math.random() * 9)
        let yAxis = Math.floor(Math.random() * 9)
        return xAxis, yAxis
    }
    
    isValid (ori, indexX, indexY, lengths) {
        if (ori == true) {
           if (indexX + lengths > 10) {
                return false     
           } else return true
        } else if (ori == false) {
            if (indexY + 10 > 10) {
                return false
            } else return true
        }
    }

    IARandomMove () {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        let randomPlay = [x,y]
        return randomPlay
    } */
    
    startGame() {
        const IABoard = new GameBoard
        const HumanBoard = new GameBoard
    }
}
randomPlacer(Destroyer)

export default GameBoard