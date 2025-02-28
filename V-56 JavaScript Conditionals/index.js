console.log("JavaScript Condiitionals")

let age = 17;
let grace = 2;
age += grace

console.log(age - grace)
console.log(age + grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)

if (age > 18) {
    console.log("you can drive")
}
else if (age == 0) {
    console.log("Are you kidding");

}
else {
    console.log("you cannot drive")
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);