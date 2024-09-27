// Play with arrays and for loop
// Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
// construct for loops to accomplish the following tasks:
// a) Print each element of the array to a new line.
// b) Print each character of the string -in reverse order- to a new line.

const myString = "LaunchCode";
const myArray = [1, 5, 'LC101', 'blue', 42];

console.log('\n');
console.log('Print each element of the array: \n')

// myArray.forEach((el) => console.log(el));

for (let i = 0; i < myArray.length; i = i + 1) {
    console.log(myArray[i]);
}

console.log('\n');
console.log('Print each character of the string -in reverse order-: \n')

for (let i = myString.length - 1; i >= 0; i = i - 1 ) {
    console.log(myString[i]);
}