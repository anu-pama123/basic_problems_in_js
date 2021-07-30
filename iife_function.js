// normal method

var userName = "Bill";

function display(name)
{
    console.log("User name is: " + name);
}

var userName = "Steve";

function display(name)
{
    console.log("User name is: " + name);
}

display(userName);

//by using iife function

(function () {
    var userName = "Steve";
    
    function display(name)
    {
        console.log("User name is: " + name);
    }

    display(userName);
})();


// example 2

function myFunc()
{
    console.log("Welcome to");
    (function() { console.log("India!"); })();
    console.log("Hi There!");
}
  
myFunc();

