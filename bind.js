// example 1

var student = {
    name : "ABC",
    printFunc: function(){
       console.log(this.name);}
}
         
var printFunc2= student.printFunc.bind(student); // bind takes object student as parameter
printFunc2();

// example 2 -> binding first name and second name

const personDetails = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const personName = {
    firstName:"Nila",
    lastName: "Ben"
}
  
let result = personDetails.fullName.bind(personName);
console.log(result());


// example 3 getting two lines together

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

let answer = sentence.fullLine.bind(line2, "Kavya", "Megha");
console.log(answer());


