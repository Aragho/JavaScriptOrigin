const{AddNumber} = require("./AddNumbers.js");

test("return AddNumber",()=>{
	let numbers = [2,3,4,5,6,7];
	let result = AddNumber(numbers);
	expect(result).toEqual([5,9,13]);
})
