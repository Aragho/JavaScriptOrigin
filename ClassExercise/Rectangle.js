
class Shape{
    #name = ""
    constructor(name){
        this.#name = name
    }
    getName(){
        return this.#name

    }

}
class Rectangle extends Shape{
    #side1
    #side2
    constructor(name,side1,side2, ){
        super(name)
        this.#side1 = side1;
        this.#side2 =side2;
    
    };
    getArea(){
        return this.#side1 * this.#side2
    };
    isSquare(){
       if(this.#side1 ==this.#side2){
        return true
       }

      else
        return false

    }
}

let rectangle = new Rectangle("rect", "1", 3)
console.log(rectangle.name)
module.exports = Rectangle
