export class Ship {
    constructor (length, hits, sunk) {
        this.length = length;
        this.hits = [];
        this.sunk = false;
    }
        hit (x) {
            this.hits.push(x)
        }

        isSunk (length, hits) {
           if (length === hits) {return true }  
           else return false     
        } 
}