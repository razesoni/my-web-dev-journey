// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//           resolve(455)
//         },3500);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settltd successfully

async function getData(){
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
    return 455
}

async function main() {
    console.log("Loading modules");
    
    console.log("Do something else");
    
    console.log("Load Data");

    let data = await getData();

    console.log(data);
    
    console.log("Process Data");
    
    console.log("task 2");
}

main(); // Call the main function to execute the asynchronous operations

//  Example POST method implementation:
async function postData(url = "", data ={}) {
    const response = await fetch(url, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data),
    });
    return response.json();
}

postData("https://example.com/answer", {answer: 42}).then((data) => {
  console.log(data);
});


// data.then(()=>{
//     console.log(data);
    
// console.log("Process Data");

// console.log("task 2");

// })





