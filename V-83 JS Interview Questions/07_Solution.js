// if (localStorage.getItem("name")) {
//     a = localStorage.getItem("name")
//     document.write("Welcome " + a)
// }
// else{
//     let  a = prompt("Enter your name")
//     localStorage.setItem("name", a)
//     document.write("Welcome " + a)
// }

let n = {
    "akash": 1,
    "rohan": 2
}

localStorage.setItem("guys", JSON.stringify(n))
JSON.parse(localStorage.getItem("guys"))

function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", note)
}
let note = localStorage.getItem("note")
if(note){
    document.querySelector(".note").innerHTML = note
}

document.querySelector("button").addEventListener("click", () => {
    let note = prompt("Enter your note")
    saveNoteToLocalStorage(note)
    document.querySelector(".note").innerHTML = note
})

