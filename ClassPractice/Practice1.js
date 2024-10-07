// // let array = [1,2,3,"home",true]; // Array literal
// // console.log(array)

// // let newArray = new Array(3);
// // newArray[0] = 10;
// // newArray.push(2);
// // newArray.push(3);
// // newArray.push(4);
// // newArray.push(5);

// // //console.log(newArray)
// //  let result = Array.from("semicolon");
// // //console.log(result);

// // let answer = Array.of(1,2,3,4,5,6,7,8,9,10)
// // //console.log(answer)
// // let arrayOfNumbers = [1,2,3,4,5,67];
// // let slice =  arrayOfNumbers.slice(-2)
// // //console.log(slice)

// let arrayOfNumbers = [1,2,3,4,5,67];
// let arr = [7,4,5,9]
// let answer = arrayOfNumbers.splice(1,0,...arr);// return deleted, add and insert an element (0 means dont delete anything)
// console.log(arrayOfNumbers);
// console.log(answer);

// let arr = [3,4,6,7,8,9];


// arr.forEach((element)=>{
//     let answer = element * 2;
//     console.log(answer)

// })
// console.log(arr)

//let fruits = ["banana", "orange", "pear"]
// function evenNumbers(arr){
//     return arr.filter((number)=> number % 2 == 0)

// }
// function getFruitsLength(array){
//     let answer = array.filter((fruits) => fruits.length > 5)// use filter to delete
//     return answer;
// }
// let number = ["pear", "banana","orange"]
// console.log(getFruitsLength(number))

// function multiplyByTwo(array){
//     let result = array.map((number)=> number * 2)
//     return result;

// }
// let number = [2,3,4,5,6,7,8]
// [{name: "john", age: 25}, {name: "jane", age: 24}]
// console.log(multiplyByTwo(number))

function getNames(array){
    
    let result = array.map((obj)=>obj["age"])// or obj
    return result;
}

 let names = [{name: "john", age: 25}, {name: "jane", age: 24}]
 console.log(getNames(names))




 