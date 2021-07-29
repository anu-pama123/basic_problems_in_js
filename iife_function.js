var userName = "Bill";

function display(name)
{
    console.log("MyScript1.js: " + name);
}

display(userName);

var userName = "Steve";

function display(name)
{
    console.log("MyScript2.js: " + name);
}

display(userName);

//by using iife function

(function () {
    var userName = "Steve";
    
    function display(name)
    {
        console.log("MyScript2.js: " + name);
    }

    display(userName);
  })();
