function isPalindrome (userInput){
	let output = ""

	for(let index = userInput.length - 1; index >= 0; index --){
		output += userInput[index];
	
	}
	if(output === userInput){
		return true;	
	}
	else{
		return false;
	}
	
}
console.log(isPalindrome("racecar"));
module.exports = {isPalindrome};