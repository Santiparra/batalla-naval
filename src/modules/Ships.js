export class Ship {
    constructor (length, hits, sunk) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        
        const hit = () => {
            return this.hits++
        }

        const isSunk = (length, hits) => {
           if (this.length === this.hits) {return true }  
           else return false     
        } 
    }
} 

