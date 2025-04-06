document.querySelector(".box")

console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
// console.log(document.querySelector(".container").hidden = true);
console.log(document.querySelector(".box").innerHTML = "Hey I am Akash");
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display: inline"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));
document.designMode = "on"
console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by Akash</b>"
div.setAttribute("class", "created");
document.querySelector(".container").append(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)
// document.querySelector(".container").prepend(div)


let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin", "<b>I have been inserted</b>")
// console.log(document.querySelector(".box").remove());

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.add("Akash"));
// console.log(document.querySelector(".container").classList.remove("red"));
// document.querySelector(".container").classList.toggle("red")

