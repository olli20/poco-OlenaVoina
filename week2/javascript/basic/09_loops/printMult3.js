// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

for (let i = 50; i >= 20; i = i - 1) {
    if (i % 3 === 0) {
        console.log(i);
    }
}