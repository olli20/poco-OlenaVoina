// thisArg in the array method "filter()"
// myArray.filter(callback(element, index, array), thisArg);

const externalObject = [20, 23, 24]; // Array used as thisArg

const myArray = [10, 25, 30, 5, 40];

// Use `thisArg` (externalObject) to refer to the first element

const filteredArray = myArray.filter(function(element) {
    return element > this[0]; // `this` refers to `externalObject`, accessing its first element (20)
}, externalObject);

console.log(filteredArray); // Output: [25, 30, 40]

const filteredArray2 = myArray.filter(function(element) {
    return element > externalObject[0];  // Directly use externalObject
});