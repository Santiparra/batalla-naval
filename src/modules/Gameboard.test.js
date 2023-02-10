 import GameBoard from "./Gameboard";  

 describe ("Board factory", () => {
        const newBoard = new GameBoard
    test('are boards being created well', () => {
        newBoard.createBoard()
        expect(newBoard.squares.length).toBe(100)
    })
    test('are boards squares in right order', () => {
        expect(newBoard.squares[67]).toStrictEqual([6, 7])
    })
     /* test("are ships being added at right index", () => {
        expect(newBoard.buildIndex([6,9])).toBe(69)
    })  */
    test("are ships being added at right horizontal index", () => {
        newBoard.placeShip ("Submarine",3, [2,3], "h")
        expect(newBoard.squares[25]).toEqual("Submarine")
    })
    test("are ships being added at right vertical index", () => {
        newBoard.placeShip ("Destroyer",2, [3,4], "v")
        expect(newBoard.squares[44]).toEqual("Destroyer")
    })
    test("are missing squares being created", () => {
        newBoard.receiveAttack ([9,1])
        expect(newBoard.squares[91]).toStrictEqual("water")
    })
      test("are ships being hitted", () => {
        newBoard.receiveAttack ([2,3])
        expect(newBoard.squares[23]).toStrictEqual("hit")
    })  


}) 
