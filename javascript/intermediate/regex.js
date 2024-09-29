// Testing for Email Format

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test("john.doe@example.com"));  // true (valid email)
console.log(emailRegex.test("john@.com"));             // false (missing domain name)
console.log(emailRegex.test("john@example"));          // false (missing top-level domain)
console.log(emailRegex.test("john@example.co.uk"));    // true (valid email)

// Testing for a Specific Word in a String

const wordRegex = /\bcat\b/;

console.log(wordRegex.test("The cat is here."));            // true (contains the word 'cat')
console.log(wordRegex.test("The cattle are grazing."));     // false (contains 'cat' as part of 'cattle')
console.log(wordRegex.test("A catapult is useful."));       // false (contains 'cat' as part of 'catapult')

// Testing for a Number

const numberRegex = /^[0-9]+$/;

console.log(numberRegex.test("12345"));     // true (contains only numbers)
console.log(numberRegex.test("123abc"));    // false (contains letters)
console.log(numberRegex.test("000"));       // true (valid numbers)
console.log(numberRegex.test("12.34"));     // false (contains a decimal point)

// Testing for Uppercase Letters Only

const uppercaseRegex = /^[A-Z]+$/;

console.log(uppercaseRegex.test("HELLO"));  // true (all uppercase)
console.log(uppercaseRegex.test("Hello"));  // false (contains lowercase 'e')
console.log(uppercaseRegex.test("WORLD"));  // true (all uppercase)
console.log(uppercaseRegex.test("123"));    // false (contains numbers, not letters)