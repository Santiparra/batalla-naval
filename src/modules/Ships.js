export class Ship {
    constructor (name, length, hits, sunk) {
        this.name = name
        this.length = length
        this.hits = []
        this.sunk = false
    }
        hit (x) {
            this.hits.push(x)
        }        

        isSunk (sLength, sHits) {
           if (sLength == sHits) {return true }  
           else return false     
        } 
}

/* createShip (name) {
            if (name == "Carrier") {
                return new Ship(name,5,0,false)
            } else if (name == "Battleship") {
                new Ship(name,4,0,false)
            } else if (name == "Cruiser") {
                new Ship(name,3,0,false)
            } else if (name == "Submarine") {
                new Ship(name,3,0,false)
            } else if (name == "Destroyer") {
                new Ship(name,2,0,false)
            } else return
        } */