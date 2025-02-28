/* Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/

let adjectives ={
    1 : "Amazing",
    2 : "Crazy",
    3 : "Fire",
}
let Shop_Name ={
    1 : "Engine",
    2 : "Foods",
    3 : "Garments",
}
let Another_Word ={
    1 : "Bros",
    2 : "Limited",
    3 : "Hub",
}
function getRandomElement(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return obj[randomKey];
}
let name = getRandomElement(adjectives) + " " + getRandomElement(Shop_Name) + " " + getRandomElement(Another_Word);
console.log(name);
