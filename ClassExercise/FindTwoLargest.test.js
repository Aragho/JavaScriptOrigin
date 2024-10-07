const{findTwoLargest} = require("./FindTwoLargest.js");

test("return findTwoLargest",()=>{
	let numbers = [2,3,5,1,7];
	let result = findTwoLargest(numbers);
	expect(result).toEqual([7,5]);
})

test("return findTwoLargest",()=>{
	let numbers = [1,9,3,4,8];
	let result = findTwoLargest(numbers);
	expect(result).toEqual([9,8]);
})
