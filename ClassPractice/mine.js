let userData = {
    firstName: "adenike",
    lastName: "ara",
    sex: "female"

}
let result = JSON.stringify(userData);
console.log(result)//  send to the serves as an object

//send to the front and goes in as a string

let data = '{"firstName":"adenike","lastName":"ara","sex":"female"}';
let answer = JSON.parse(data);
console.log(answer);
// when ypur are calling a function outside a file #asyncronious programming
//u can use async without await
// allows you to continue another function while you wait for other function
//async

//you cant use awit without async
//await