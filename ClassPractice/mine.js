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