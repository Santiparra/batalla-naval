import { Ship } from "./Ships";
 
test('are ships being created', () => {
    expect(newShip).toEqual({ length: 3, hits: 0 })
})

test("is hit hitting", () => {
    ship.hit()
    expect(ship.hits).toBe(1)
})

test("is sink sinking", () => {
    expect(ship.isSunk(3,3)).toBe(true)
})
