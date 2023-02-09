import GameBoard from "./Gameboard";

describe ("Board factory", () => {
        const newBoard = new GameBoard
    test('are boards being created well', () => {
        newBoard.createBoard()
        expect(newBoard.squares.length).toBe(100)
    })
    test('are boards squares in right order', () => {
        expect(newBoard.squares[55]).toStrictEqual([5, 5])
    })
     test("are ships being added at right index", () => {
        newBoard.placeShip(2,[0,1])
        expect(index).toBe(1)
    })  
})
