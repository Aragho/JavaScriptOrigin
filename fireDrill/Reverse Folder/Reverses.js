function reverseArray (number){
	numbers = [];

	for(let index = number.length -1; index >= 0; index--){
		numbers.push(number[index])

	}
	return numbers
}
console.log(reverseArray([1,2,3,4]))
module.exports = {reverseArray};