const {isPalindrome} = require("./IsPalindrome.js");

test("return isPalindrome",()=>{
	let userInput = "racecar";
	let result = isPalindrome(userInput);
	expect(result).toEqual(true);
})




