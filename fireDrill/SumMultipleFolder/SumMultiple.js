function sumMultiple(number){

	sum = 0;

	for(let index = 0; index <= number.length; index++){
		if(number[index] % 3 == 0 || number[index] % 5 == 0 )
		sum+= number [index]

	}
	return sum;
}



console.log(sumMultiple([4,5,10]));