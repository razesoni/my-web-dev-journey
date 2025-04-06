// let obj = {
//     a : 1,
//     b : "Harry"
// }
// console.log(obj);

// let animals = {
//     eats : true
// };

// let rabbit = {
//     jumps : true
// };

// rabbit._proto_ = animals;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created");
    }
    eats(){
        console.log("I am eating");
    }
    jumps(){
        console.log("I am jumping");
    }
}

class Lion extends Animal{
    constructor(name){
    super(name)
    console.log("object is created in lion");
    }
    eats(){
        super.eats()
        console.log("lion eats");
        
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera")
console.log(l);


