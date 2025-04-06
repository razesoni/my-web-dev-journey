let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    // alert("I was clicked");
    document.querySelector(".box").innerHTML = "<b>you were clicked</b>"
})
btn.addEventListener("dblclick", ()=>{
    // alert("I was clicked");
    document.querySelector(".box").innerHTML = "<b>you were double clicked</b>"
})
btn.addEventListener("contextmenu", ()=>{
    alert("I was right clicked");
})
document.addEventListener("keydown", (e)=>{
    console.log(e, e.keyCode);
})