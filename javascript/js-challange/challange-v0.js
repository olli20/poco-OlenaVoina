const nums = [1, 2, 4, 4, 4, 5, 6, 7, 8, 8, 9];

const removeDuplicates = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1]) {
            newArray.push(array[i]);
        } 
    }
    return newArray;
};

const withoutDuplicates = removeDuplicates(nums);

console.log(`The array without duplicates: ${withoutDuplicates}`);
console.log(`Its length: newArray.length ${withoutDuplicates.length}`);

