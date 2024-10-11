const Rectangle = require('./Rectangle.js')
test("test rectangle",()=>{

    let rectangle  = new Rectangle("nike", 4, 3)
    let result = rectangle.getArea()
    expect(result).toBe(12)
})
test("test rectangle",()=>{

    let rectangle  = new Rectangle("nike", 4, 3)
    let result = rectangle.isSquare()
    expect(result).toBe(false)
})
test("test rectangle",()=>{

    let rectangle  = new Rectangle("nike", 4, 3)
    let result = rectangle.getName()
    expect(result).toBe("nike")
})

