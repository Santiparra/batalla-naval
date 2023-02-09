import { Ship } from "./Ships";
 
describe ("ship factory", () => {
    const newShip = new Ship(2,0,false);
    test('are ships being created', () => {
        expect(newShip.hits).toStrictEqual([])
    })
    test("is hit hitting", () => {
        newShip.hit(3)
        expect(newShip.hits).toContain(3)
    })
    test("is sink sinking", () => {
        expect(newShip.isSunk(3,3)).toBe(true)
    })
})




