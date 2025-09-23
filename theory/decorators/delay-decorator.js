/* decorators, call/apply practice */

/*
... rest parameters allows to accept any amount of 
passed in arguments
*/

/*
function message(...args) {
  console.log(args);
}


function decorator(func, ms) {
  //wrapper also accepts any amount of passed in arguments 
  return function(...args) {
    setTimeout(func.apply(this, args), ms);
    //passing an array to func
  }
}

let myFunction = decorator(message, 5000);
myFunction(1,2,3,[4, 5]);
*/