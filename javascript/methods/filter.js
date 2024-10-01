// simple explanation

const numberArray = [1, 6, 4, 7, 8, 78, 90];

// filter elements that are less than 10
const filteredArray = numberArray.filter(function(item) {
    return item < 10;
});

// shorter syntax
// const filteredArray = numberArray.filter(item => item < 10);

// Output: [ 1, 6, 4, 7, 8 ]


// example of usage
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 30 }
];

// filter users who are 30 or older
  const filteredUsers = users.filter(user => user.age >= 30);
  console.log(filteredUsers);
/* Output:
    [
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 30 }
    ]
*/

// more advanced explanation
const myArray = [10, 12, 18, 22, 5];

// myArray.filter(callback(element, index, array), thisArg);

// callback with all arguments: element, index, array
const anotherArray = myArray.filter(function(item, index, array) {
    console.log(`Element: ${item}, Index: ${index}, Array: ${array}`);
    // Filter out elements greater than 15
    return item > 15;
});

// Output: [20, 30, 40]