const isEven = require('./23-testing-exercises')

test("Se envia numero par", () => {
    expect(isEven(6)).toBe(true)
})

test("Se envia numero impar", () => {
    expect(isEven(7)).toBe(false)
})