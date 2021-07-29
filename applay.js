// example 1 for getting full name

const personDetails = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const personName = {
    firstName:"Nila",
    lastName: "Ben"
}
  
let result = personDetails.fullName.apply(personName, ["Washington", "America"]);
console.log(result);

// example 2 getting two lines together

const sentence = {
    fullLine : function(name1, name2) {
        return this.line1 + " " + this.line2 + " " + name1 + "," + name2;
    } 
}

const line1 = {
    line1 : "Hello",
    line2 : "Guys"
}

const line2 = {
    line1 : "Welcome",
    line2 : "All"
}

let answer = sentence.fullLine.apply(line2, ["Kavya", "Megha"]);
console.log(answer);

