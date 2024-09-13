function factorial (number){
	factor = 1;

	for(let index = 1; index <= number; index++){
		factor*= index
	}
	return factor
}
console.log(factorial(5));
		
module.exports = {factorial};
	