import { Ship } from "./Ships";
 
describe ("ship factory", () => {
    const Battleship = new Ship("Battleship",4,0,false)
    test('are ships being created', () => {
        expect(Battleship.length).toStrictEqual(4)
    })
    test("is hit hitting", () => {
        Battleship.hit(3)
        Battleship.hit(3)
        Battleship.hit(3)
        Battleship.hit(3)
        expect(Battleship.hits.length).toStrictEqual(4)
    })
    test("is sink sinking", () => {
        /* Battleship.isSunk(Battleship.length, Battleship.hits.length) */
        expect(Battleship.isSunk(Battleship.length, Battleship.hits.length)).toBe(true)
    })
})




