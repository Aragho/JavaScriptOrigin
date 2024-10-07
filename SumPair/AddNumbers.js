function AddNumber(numbers){  
    let pairSum = [];
    for(let index = 0; index < numbers.length; index+=2){
            pairSum.push(numbers[index] + numbers[index + 1]);

    }
    return pairSum;

}
module.exports = {AddNumber};
console.log(AddNumber([2,3,4,5,6,7]));
console.log(AddNumber([1,3,5,1,6,3]));

   