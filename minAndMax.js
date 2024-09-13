
function findMiniAndMaxi( numbers){
	let minmimuAndMaximum = [];
	let minValue = numbers[0];
	let maxValue = numbers[0];

 for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < minValue) minValue = numbers[index];
        if (numbers[index] > maxValue) maxValue = numbers[index];
    }
	minmimuAndMaximum.push(minValue)
	minmimuAndMaximum.push(maxValue)


    return  minmimuAndMaximum


}


let numbers = [5,3,4,9,8];
console.log(findMiniAndMaxi(numbers));








  











