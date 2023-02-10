import GameBoard from "./Gameboard"

const humanBoard = document.getElementById("humanBoard")

const startBtn = document.getElementById("start-btn")

startBtn.addEventListener("click", renderBoards)

const IABoard = new GameBoard
const HumanBoard = new GameBoard

export function renderBoards () {
    HumanBoard.createBoard()
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div')
        cell.id = i
        cell.classList.add("cell")
        cell.textContent = i
        humanBoard.appendChild(cell);        
    }   
    startBtn.classList.add("start-btn-hide")
    placementFace ()    
}

export function placementFace () {
    const cells = document.querySelectorAll(".cell")
    cells.forEach((item) => {
        const cell = item;
        cell.addEventListener("click", (e) => {
             HumanBoard.placeShip ("Submarine",3, generateArr(e.target.id), "h") 
             cells[e.target.id].textContent = HumanBoard.squares[Number(e.target.id)]
            /* console.log(HumanBoard.squares) */
            /* console.log(Number(e.target.id))
            refreshBoard(Number(e.target.id)) */  }
            );
    });
} 

function generateArr(index) {
    return Array.from(String(index), Number)
  }

function placeCount () {
    HumanBoard.placeShip ("Submarine",3, [2,3], "h")
    refreshBoard()
    console.log(HumanBoard.squares)
} 

/* export function refreshBoard(i) {
    
    const targetCell = document.getElementById(`${i}`)
    targetCell.textContent = HumanBoard.squares[i]
} */
         /* (shipName, shipSize, arrayCCs, direction)
        this.Carrier = new Ship("Carrier",5,0,false);
        this.Battleship = new Ship("Battleship",4,0,false);
        this.Cruiser = new Ship("Cruiser",3,0,false);
        this.Submarine = new Ship("Submarine",3,0,false);
        this.Destroyer = new Ship("Destroyer",2,0,false); */