// example 1

let animal = {
    name : "Lion",
    food : "meet"
};

let rabbit  = Object.create(animal);
console.log(rabbit.__proto__);

// example 2

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype);
console.log(studObj.__proto__);

console.log(typeof Student.prototype);
console.log(typeof studObj.__proto__);

console.log(Student.prototype === studObj.__proto__ );



