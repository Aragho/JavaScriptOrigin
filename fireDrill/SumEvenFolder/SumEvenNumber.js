function countEven(number){
	sum = 0
	for(let index = 0; index < number.length; index++)
		if (number[index] % 2 == 0){
			sum +=number[index]
			
		}
	return sum

}


module.exports = {countEven};