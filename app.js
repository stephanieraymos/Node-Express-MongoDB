const rect = require('./rectangle');

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
      if (err) { //if there's an error, console log the error message defined in rectangle.js
          console.log('ERROR:', err.message);
      } else {
          console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
          console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
      }
  });
  console.log('This statement is logged after the call to rect()'); //To see the order in which the code is executed
}
//Asynchronous non-blocking code execution. Waits for the timers to finish and run the callbacks. But while waiting; still able to run other code. 
// Because of closures; even though the rect function has finished executing by the time the callbacks from set timer run; the callbacks still had access to the length and width values passed into rect function.

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
