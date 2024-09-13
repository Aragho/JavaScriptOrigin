const{isPrime} = require("./PrimeNumber.js");
let number = 7;


test("return isPrime",()=>{
	let number = (7);
	let result = isPrime(number);
	expect(result).toBe(true);
})

