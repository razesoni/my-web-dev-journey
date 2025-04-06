async function getData(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            let a = document.querySelector(".container").innerHTML += message + "<br>";
        }, Math.ceil(1 + Math.random() * 7000));
    });
}

async function main() {
    let dots = "...";
    let arr = [
        `Initializing Hacking${dots}`,
        `Reading your files${dots}`,
        `Password files detected${dots}`,
        `Sending all passwords and personal files to server${dots}`,
        `Cleaning up${dots}`
    ];

    for (let message of arr) {
        console.log(message);
        await getData(message);
    }
}

main(); // Call the main function to execute the asynchronous operations


