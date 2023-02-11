import GameBoard from "./Gameboard"
import { Ship } from "./Ships"

const humanBoard = document.getElementById("humanBoard")
const IAboard = document.getElementById("IAboard")
const optionBtns = document.querySelector(".options")
const startBtn = document.getElementById("start-btn")
const rotateBtn = document.querySelector(".rotate")
const deployAuto = document.querySelector(".random-deploy")
const startGameBtn = document.querySelector(".start-game")
const shipsContainer = document.getElementById("ships")

let dir = 0
const IABoard = new GameBoard
const HumanBoard = new GameBoard



startBtn.addEventListener("click", renderBoards)
rotateBtn.addEventListener("click", rotate)

export function renderBoards () {
    HumanBoard.createBoard()
    IABoard.createBoard()
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div')
        cell.id = i
        cell.classList.add("cell")
        cell.textContent = i
        humanBoard.appendChild(cell);        
    } 
    for (let i = 0; i < 100; i++) {
       const IAcell = document.createElement('div')
       IAcell.id = i
       IAcell.classList.add("IAcell")
       IAcell.textContent = i
       IAboard.appendChild(IAcell);        
    }  
    startBtn.classList.add("hide")
    rotateBtn.classList.remove("hide")
    deployAuto.classList.remove("hide")
    startGameBtn.classList.remove("hide")
    shipsContainer.classList.add("ships")
    shipsContainer.classList.remove("hide")   
    optionBtns.classList.remove("hide") 
    placementFace ()    
}


function rotate () {
    const dragShips = Array.from(shipsContainer.children)
    dir = dir === 0 ? 90 : 0
    dragShips.forEach(element => element.style.transform = `rotate(${dir}deg)`)
}

export function placementFace () {
    const cells = document.querySelectorAll(".cell")
    cells.forEach((item) => {
        const cell = item;
        cell.addEventListener("click", (e) => {
             HumanBoard.placeShip ("Submarine",3, generateArr(e.target.id), "h") 
             /* cells[e.target.id].textContent = HumanBoard.squares[Number(e.target.id)] */
             refreshBoard();
             console.log(HumanBoard.squares)
            /* console.log(Number(e.target.id))
            refreshBoard(Number(e.target.id)) */  }
            );
    });
} 

function randomPlacer () {
    let randomI = Math.floor(Math.random() * 100)

}

export function refreshBoard() {
    for (let i = 0; i < 100; i++ ) {
        if (HumanBoard.squares[i].length < 2) {
            let target = document.getElementById(`${i}`)
            console.log(target)
            target.classList.add(HumanBoard.squares[i])
        }
    } 
} 
         /* (shipName, shipSize, arrayCCs, direction)
        this.Carrier = new Ship("Carrier",5,0,false);
        this.Battleship = new Ship("Battleship",4,0,false);
        this.Cruiser = new Ship("Cruiser",3,0,false);
        this.Submarine = new Ship("Submarine",3,0,false);
        this.Destroyer = new Ship("Destroyer",2,0,false); */