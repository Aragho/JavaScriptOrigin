function isPrime(number){
	factorOfNumber = 1;
	
	for (let index = 2; index * index <= number; index++) {
		if (number % index == 0){
			factorOfNumber ++;
		}	
	}
	if(factorOfNumber == 1){
		return true
	}
	else
		return false
	}
module.exports = {isPrime};