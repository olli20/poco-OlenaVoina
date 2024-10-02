function isDuplicated(value, index, array) {
    return array.indexOf(value) === index;
}

let arr = [10, 10, 10, 30, 30, 40, 50, 50];
let filtered = arr.filter(isDuplicated);
console.log("Non-duplicated Array Elements: ", filtered);