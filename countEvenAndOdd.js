function countEvenAndOdd(number){
	numbers = []
	even_count = 0
	odd_count = 0
	for(let index = 0; index < number.length; index++)
		if (index % 2 == 0){
			even_count += 1;
		}else{
			odd_count +=1
		}
		numbers.push(even_count, odd_count)
	return numbers

}

console.log(countEvenAndOdd ([2,1,5,7,8]))

