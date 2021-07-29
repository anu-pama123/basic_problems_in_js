function add(number1, number2, callback) {
    let  sum = number1 + number2;
    console.log("sum = " + sum);
    callback();
}

function disp() {
    console.log("Print after addition");
}

add(5, 10, disp);

// passing anonymous function

function mul(num1, num2, callback) {
    let answer = num1* num2;
    console.log("Answer is = " + answer);
    callback();
}

mul(5, 6, function display() {
    console.log("Display after multiplication");
});

// example 3 asynchronous callback

function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url}`);
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);

