function findFirstDuplicate(number){
	let duplicate = -1;
	for(let index = 0; index < number.length; index++){
		for(let counter = index + 1; counter < number.length; counter++ ){
		if (number[index] == number[counter] ){
			duplicate = number[index];
		}
		}
	}
	return duplicate;
}

console.log(findFirstDuplicate([4,3,2,3,5]));
module.exports = {findFirstDuplicate};
