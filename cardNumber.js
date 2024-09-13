function checkCard(numbers){

	let cardNumber = ""

 	for(let index = 0; index < numbers.length; index++){
		if( numbers[index] != "-")cardNumber += numbers[index];

}
	
	if (cardNumber.length  == 16 && cardNumber[0] == "4" | cardNumber[0] == "5" | cardNumber[0] == "6"){

		return true
	} else
		return false
	


}



console.log(checkCard("5234-5678-9432-3466"))

 