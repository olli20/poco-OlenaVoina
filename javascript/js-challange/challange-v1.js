const nums = [1, 2, 2, 4, 4, 4, 5, 5, 6, 9];

const removeDuplicates = (array) => {
    const originalLength = array.length;

    for (let i = 0; i < originalLength; i++) {
        if (array[i] !== array[i + 1]) {
            array.push(array[i]);
        }; 
    };
    array.splice(0, originalLength);
    return array.length;
}

removeDuplicates(nums);

console.log(`Array without duplicates: ${nums}`);
console.log(`Its length: ${nums.length}`);

