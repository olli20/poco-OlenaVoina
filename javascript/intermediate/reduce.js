const sum = arrayOfNumbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
}, 0);

// accumulator: Starts at 0 (the second argument) and is updated as the function adds each currentNumber
// currentNumber: Iterates over each number in the numbers array, one by one
// The sum is computed by adding the current number to the accumulator on each iteration

