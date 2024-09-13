const{findMax} = require("./FindMax.js");
let number = 50;


test("return findMax",()=>{
	let number = [1,2,3,4,50,6,7,8,9,10];
	let result = findMax(number);
	expect(result).toEqual([50]);
})






