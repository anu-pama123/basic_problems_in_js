console.log('One');

function print() {
    console.log('Three');
}

console.log('Two');
setTimeout(print, 5000);
console.log('Four')