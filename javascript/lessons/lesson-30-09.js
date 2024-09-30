let vipDiscount = 0;
let regularDiscount = 5;

let finalDiscount = vipDiscount || regularDiscount;  // only vipDiscount is taken, because it is first true;

//condition1 || (conditionResultingFromExternalFunction)  - the second function is evaluated, only if the first is false;

let isAuthenticated = true;
let isAdmin = true;
isAuthenticated && isAdmin && console.log("Access to admin dashboard");

// Link to read
// https://developer.mozilla.org/en-US/docs/Glossary/Type

// https://dorey.github.io/JavaScript-Equality-Table/