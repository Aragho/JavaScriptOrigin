const{findFirstDuplicate} = require("./FirstDuplicate.js");
let number = [4,3,2,3,5];


test("return findFirstDuplicate",()=>{
	let number = [4,3,2,3,5];
	let result = findFirstDuplicate(number);
	expect(result).toEqual(3);
})

