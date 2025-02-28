console.log("Akash");

// let bhu = document.getElementsByClassName("box")
// console.log(bhu);

// bhu[2].style.backgroundColor = "red"

// document.getElementById("2").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e =>{
   e.style.backgroundColor = "green" 
})
e = document.getElementsByTagName("div")
console.log(e);

console.log(e[2].matches("#redbox"));
console.log(e[2].closest("#redbox"));
console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));




