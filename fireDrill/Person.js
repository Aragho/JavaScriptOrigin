function Person(){
}

let person = new Person() 
const{title,author, yearPublished} = person;
person.title = "The Great Gatsby";
person.author = "F.Scott Fitzgerald";
console.log(person.title + " " + "by" + " " + person.author);