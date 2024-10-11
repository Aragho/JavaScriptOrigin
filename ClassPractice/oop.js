// // let animal = {
// //     name : "unknown",
// //     color : "black",
// //     sound: function(){
// //         return `${this.name} makes a sound`
// //     }
// // }
// // console.log(animal)
// // let dog = Object.create(animal)
// // dog.name = "bulldog";
// // dog.color = "white";
// // dog.numberOfLegs = 4;
// // console.log(dog)

// // let cat = {};
// // let frenchCat = Object.setPrototypeOf(cat, animal)
// // frenchCat.name = "frenchCat"
// // console.log(frenchCat.name);
// // console.log(frenchCat.sound());

// // let tiger = {
// //     name : "nigeriaTiger",
// //     sex : "unknown",
// //     _proto_ : animal,
// // }
// // console.log(tiger._proto_)
// // Constructor functions..................................................................................................
// function Person(name,gender){
//     this.name = name;
//     this.gender = gender;
// }
// let personOne = new Person("dunni","female");
// console.log(personOne.name)

class Animal{
    // using # for private variable
    #name = "dunni";
    constructor(name){
        this.name = name

    }
}

let dog = new Animal("dog");
console.log(dog.name)
// class Cat extends Animal{
//     constructor(){
//         super();
//     }
// }
