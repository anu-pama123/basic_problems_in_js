// hoisting

x = 10;
y = 20;
function sum() {
    sum = x + y;
    console.log('Sum of x and y = ' + sum);
}
sum();
var x, y;

// using let and const variable before it is declared will show error

a = 10;
console.log('value of a = ' + a);
let a;

// js hoist declarations not initializations

firstNumber = 10;

function add() {
    result = firstNumber + secondNumber;
    console.log('Sum of the numers = ' + result);
}
add();
var firstNumber, result;
var secondNumber = 40;