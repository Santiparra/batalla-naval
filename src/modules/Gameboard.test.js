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
    /* test("are ships being added at right index", () => {
        expect(newBoard.buildIndex([6,9])).toBe(69)
    }) */
    test("are ships being added at right index", () => {
        newBoard.placeShip (3, [2,3])
        expect(newBoard.squares[25]).toEqual({"hits": [], "length": 3, "sunk": false})
    })
    test("are missing squares being created", () => {
        newBoard.receiveAttack ([9,1])
        expect(newBoard.squares[91]).toStrictEqual("water")
    })
    /* test("are missing squares being created", () => {
        newBoard.receiveAttack ([2,3])
        expect(newBoard.squares[23]).toStrictEqual("ship")
    }) */


})
