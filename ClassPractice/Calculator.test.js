const Calculator = require('./Calculator.js')
test("test calculator",()=>{

    let number = new Calculator(8,9)
    let result = number.add()
    expect(result).toBe(17)
})