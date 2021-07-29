// example 1

console.log('One');

function print() {
    console.log('Three');
}

console.log('Two');
setTimeout(print, 5000);
console.log('Four')

//  example 2

console.log("Hi");
  
setTimeout(() => {
    console.log("Let us see what happens");
}, 2000);
  
console.log("Going to end");
console.log("End");