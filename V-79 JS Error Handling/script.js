let a = prompt("Enter a number")

let b = prompt("Enter second number")

sum = parseInt(a) + parseInt(b)

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
// console.log("Thu sum is ",sum);
function main(){
let x = 1
try{
    console.log("Thu sum is ",sum*x);
    return true
}
catch(error){
    console.log("Error");
    return false
}
finally{
    console.log("files are bieng closed and db connection is bieng closed");
}
}
let c = main()