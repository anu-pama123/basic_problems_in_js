async function getData() {
  var x = await "Hello world!!";
  console.log(x);
}

console.log("1");
getData();
console.log("2");

// example 2

async function display() {
  let promise = new Promise(function(resolve, reject) {
    resolve("Hai !!");
  });
  let answer = await promise;
  console.log(answer);
}

display();
console.log('Hello');

// example 3

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves

  console.log(result); // "done!"
}

f();


