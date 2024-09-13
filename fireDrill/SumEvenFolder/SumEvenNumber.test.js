const{countEven} = require ("./SumEvenNumber.js");
let number = 30;


test("return countEven",()=>{
	let number = [1,2,3,4,5,6,7,8,9,10];
	let result = countEven(number);
	expect(result).toEqual(30);
})






