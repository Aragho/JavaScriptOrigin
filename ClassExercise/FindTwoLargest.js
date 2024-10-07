function findTwoLargest(numbers){
	let largest = numbers[0];
	let secondLargest = numbers[0];

for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > largest) {
            secondLargest = largest;
            largest = numbers[index];
        } else if ( numbers[index] < largest) {
            secondLargest = numbers[index];
        }
    }

    return [largest, secondLargest];
}
console.log(findTwoLargest([2,3,5,1,7]))
console.log(findTwoLargest([1,9,3,4,8]))
module.exports = {findTwoLargest}
 