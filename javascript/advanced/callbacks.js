// calculator
function calculate(callback, x, y) {

    const result = callback(x, y);

    console.log(result);
    return result;
}

// operations
let addNumbers = function(a, b) {
    console.log("Callback says", a + b)
    return a + b;
};

let multNumbers = function(a, b) {
    console.log("Callback says", a * b)
    return a * b;
};

// calculating
// const sum = calculate(addNumbers, 5, 10);

// const multResult = calculate(multNumbers, 5, 10);

addNumbers(5, 10);