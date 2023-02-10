import GameBoard from "./Gameboard"

const humanBoard = document.getElementById("humanBoard")

const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", renderBoards)

const IABoard = new GameBoard
const HumanBoard = new GameBoard

export function renderBoards () {
    HumanBoard.createBoard()
    HumanBoard.squares.forEach(element => {
        const square = document.createElement('div')
        square.dataset.id = element
        square.classList.add("cell")
        square.textContent = element
        humanBoard.appendChild(square)
    }
) 
    startBtn.classList.add("start-btn-hide")
    placementFace ()    
}

/* cells.forEach((item) => {
    const cell = item;
    cell.addEventListener("click", (e) => {
   console.log(HumanBoard.squares) });
}); */


export function placementFace () {
    const cells = document.querySelectorAll(".cell")
    cells.forEach((item) => {
        const cell = item;
        cell.addEventListener("click", (e) => {
            HumanBoard.placeShip ("Submarine",3, [2,3], "h")
            console.log(HumanBoard.squares) });
    });
} 

 function placeCount () {
    HumanBoard.placeShip ("Submarine",3, [2,3], "h")
    refreshBoard()
    console.log(HumanBoard.squares)
} 


export function refreshBoard() {
    cells.forEach(element => {
        element.textContent = element
    });console.log(HumanBoard.squares)
} 




        /* (shipName, shipSize, arrayCCs, direction)
        this.Carrier = new Ship("Carrier",5,0,false);
        this.Battleship = new Ship("Battleship",4,0,false);
        this.Cruiser = new Ship("Cruiser",3,0,false);
        this.Submarine = new Ship("Submarine",3,0,false);
        this.Destroyer = new Ship("Destroyer",2,0,false); */