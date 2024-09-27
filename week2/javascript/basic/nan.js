console.log(typeof(NaN)); //number
// NaN occurs in situations where a numeric operation fails

let result = parseInt("abc"); // result is NaN
let invalidOperation = 0 / 0; // NaN
let invalidMultiplication = "text" * 5; // NaN

// it's unique because of the following behavior
console.log(NaN === NaN); // false

//Checking for NaN

// isNaN first tries to convert to a number, than check
console.log(isNaN("abc"));  // true (coerces "abc" to NaN)
console.log(isNaN(undefined)); // true (coerces undefined to NaN)

// Number.isNaN checks emediately
console.log(Number.isNaN("abc"));  // false (string is not coerced)
console.log(Number.isNaN(NaN));    // true (checks strict equality with NaN)
