async function display() {
    let promise = new Promise(function(resolve, reject) {
      resolve("Hai !!");
    });
    await promise;
}
  
//display();
console.log(display());

// example 2

async function getData() {
    var x = await "Hello world!!";
    console.log(x);
}

console.log("1");
getData();
console.log("2");