const myArray = [1, "wer", 4, 5];

const selectionSort = (array) => {
    const transformedArray = array.map(Number); // Directly transform while copying

    console.log("transformed array: ", transformedArray);

    if (transformedArray.includes(NaN)) {
        console.log("We need an array with only numbers");
        return;
    }
    // selectionSort.consists(isNaN) {
    //     console.log('we need an array with numbers only')
    // }
    
    // for (let i = 0; i < array.length; i = i + 1) {


    // }
    return;
}

selectionSort(myArray);