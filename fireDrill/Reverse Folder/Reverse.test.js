const{reverseArray} = require("./Reverses.js");

test("return reverseArray",()=>{
	let number = [1,2,3,4];
	let result = reverseArray(number);
	expect(result).toEqual([4,3,2,1]);
})



