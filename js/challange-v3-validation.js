const nums = [1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 6, 7, 8, 8, 9];

console.log(`Array before: ${nums}`);

const removeDuplicates = (array) => {
    if ( array.length < 1 || array.length > 3 * 104 || array.some(item => item > 100 || item < -100)) {
        return null;
    };

    for (let i = 0; i < (array.length); i++) {
            if (array[i] === array[i+1]) {
                array.splice(i, 1);
                i--;
            } 
        }
    return array.length;
}

const k = removeDuplicates(nums);

if (k) {
    console.log("The array without duplicates: ", nums);
    console.log(`Its length (K): ${k}`);
} else {
    console.log("The array does not meet the constrains");
}





//garbage
                // let splised = array.splice(i, 1);
                // array.push(splised);
                    // let counter = 0;
                                    // counter++;

