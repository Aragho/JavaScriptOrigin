const{factorial} = require("./Factorial.js");

test("return factorial",()=>{
	let number = (5);
	let result = factorial(number);
	expect(result).toEqual(120);
})
