//Creating a node module to import into another file. This is imported into app.js using the require function

//This export returns this entire function for this module instead of 2 seperate methods, so we needed to use module.exports instead of the shorthad (exports)
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) { //must be positive numbers
    //asynchronous functions should return an error object as the first argument (for nodeJS)
          callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); //node error callback pattern
  } else { //if numbers were valid positive numbers
      setTimeout(() =>
          callback(null, { //null means no error
              perimeter: () => 2 * (x + y), //The second argument is an object that contains two methods: perimeter and area.
              area: () => x * y //inner functions have access to scope of the outer functions. Since x and y are available in the outer function; we dont need to pass them into these methods (thanks closures)
          }),
          2000 //miliseconds to wait
      );
  }
};