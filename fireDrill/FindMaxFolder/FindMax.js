function findMax(number){
	let largest = []
	let maxValue = [0]
	for(let index = 0; index < number.length; index++){
		if (number[index] > maxValue) maxValue = number[index];
	}

		largest.push(maxValue)

	return largest
	
}

console.log(findMax([1,2,3,4,50,6,7,8,9,10]))
module.exports = {findMax};



