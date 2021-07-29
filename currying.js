// normal method

function volume1(length, width, height) {
    return length * width * height;
}

let result = volume1(10, 2, 10);
console.log("Volume without currying = " + result);

// by using currying

function volume(length) {
    return function(width) {
        return function(height) {
            return height * width * length;
        }            
    }
}

let result1 = volume(10) (1) (20);
console.log('Volume with currying = ' + result1);

// example 2

let multiply = (a, b, c) => {
    return a * b * c;
}

let multiplyCurried = (a) => (b) => (c) => {
    return a * b * c;
}

let answer = multiply(1, 2, 3);
console.log('without currying = ' + answer);

let answer1 = multiplyCurried(1)(2)(3);
console.log('with currying = ' + answer1);
