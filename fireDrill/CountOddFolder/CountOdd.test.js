const{countOdd}  = require("./CountOdd.js");

let number = (4);

test("return countOdd",()=>{

	let number = [2,6,7,1,5,7,0,4]
	let result = countOdd(number);
	expect(result).toEqual(4);

})