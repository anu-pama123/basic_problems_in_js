// eample 1

var promise = new Promise(function(resolve, reject) {
    const x = 'Anupama';
    const y = 'Anupama';
    if(x == y) {
        resolve();
    } else{
        reject();
    }
    
});

promise.
    then(function() {
        console.log('Success');
    }).
    catch(function() {
        console.log('some error has occured');
    });

// example 2

promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 1000);
});
      
// resolve runs the first function in .then
promise.
    then(function() {
        console.log('done!!'); //shows done after 1 second
    }).
    catch (function() {
        console.log('error');
    }); 