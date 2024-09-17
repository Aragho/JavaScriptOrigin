function Person(title,author, yearPublished){
	
	const book = {}
		book.title = title;
		book.author = author;
		book.yearPublished = yearPublished;
}

let person = new Person() 
const{title,author, yearPublished} = person;
person.title = "The Great Gatsby";
person.author = "F.Scott Fitzgerald";
console.log(person.title + " " + "by" + " " + person.author);