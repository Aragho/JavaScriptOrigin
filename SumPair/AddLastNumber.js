function LastNumber(numbers){
    let sum = []
    let newArray = []
    let str = ""
    for(let index = 0; index < numbers.length; index++){
        str+= numbers[index];
    }
    str = (parseInt(str))+1;
    
    str = str.toString()
    console.log(typeof(str))
    for(let count = 0; count < str.length;count++){
        sum.push(parseInt(str[count]))

    }
    
    return sum;
}
console.log(LastNumber([9,9,9]));
