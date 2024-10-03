const nums = [1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 6, 7, 8, 8, 9];

console.log(`Array before: ${nums}`);

const removeDuplicates = (array) => {
    for (let i = 0; i < (array.length); i++) {
            if (array[i] === array[i+1]) {
                array.splice(i, 1);
                i--;
            } 
        }
    return array.length;
};

const k = removeDuplicates(nums);

console.log("The array without duplicates: ", nums);
console.log(`Its length (K): ${k}`);
