const simpleArray = [0, 1, 2, 3];

function incrementItems (array) {
    for ( let i = 0; i < array.length ; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}

console.log("Array before running the incrementItems function: ", simpleArray);

incrementItems(simpleArray);

console.log("Array after running the incrementItems function: ", simpleArray);


// Fix the code
// function incrementItems (arr) {
// for ( let i = 0; i < array . length ; i++)
// arr [i] === arr[i] + 1
// return array
// }
// Expected behaviour: Input -> Output
// incrementItems ([0 , 1, 2 , 3]) -> [1 , 2 , 3 , 4]
// incrementItems ([2 , 4, 6 , 8]) -> [3 , 5 , 7 , 9]
// incrementItems ([ -1 , -2 , -3 , -4]) -> [0 , -1 , -2 , -3]