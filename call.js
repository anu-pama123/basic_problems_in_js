// example 1 -> calling full name method using person1

const person = {
    fullName: function() {
        return this.firstName + " " + this.secondName;
    }
}

const person1 = {
    firstName : "John",
    secondName : "Samuel"
}

const person2 = {
    firstName : "Nila",
    secondName : "Ben"
}

let result = person.fullName.call(person1);
console.log(result);

// example 2 -> calling fullName method using person2

let answer = person.fullName.call(person2);
console.log(answer);

// example 3 -> call method with arguments

const personDetails = {
    fullName1: function(city, country) {
      return this.firstName1 + " " + this.lastName + "," + city + "," + country;
    }
}
  
const personName = {
    firstName1:"Nila",
    lastName: "Ben"
}
  
let result1 = personDetails.fullName1.call(personName, "Oslo", "Norway");
console.log(result1);
  
  