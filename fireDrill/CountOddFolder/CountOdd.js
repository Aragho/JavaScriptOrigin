function countOdd (number){
	count_odd = 0
	for(let index = 0; index < number.length; index++){
		if(index % 2 != 0)
			count_odd += 1
	}
	return count_odd

}
console.log(countOdd([2,6,7,1,5,7,0,4]))
module.exports = {countOdd};