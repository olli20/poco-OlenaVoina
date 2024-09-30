// Decimal/Binary conversion
// to run: 06_decimalBinary.js


const readline = require('readline');

const promptUser = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
};

const askForDecimal = async () => {
    let input;
    let number;
    
    do {
        input = await promptUser('Please enter a decimal number: ');
        number = Number(input);
        if (isNaN(number)) {
            console.log('Not a valid format. Please enter a numeric value.');
        }
    } while (isNaN(number));     
    
    return number;
};

const askForBinary = async () => {
    let input;
    let binary;
    
    do {
            input = await promptUser('Please enter a binary number: ');
            binary = input;

            // validation
            if (!/^[01]+$/.test(binary)) {
                console.log('Invalid binary number. Please use only 0 and 1.');
                binary = false;
            } 
    } while (binary === false);
        
    return input;
};

const main = async () => {
    let message;
    let decimalNumber;
    let binaryNumber;

    const operation = await promptUser('Enter 1 to convert decimal to binary, enter 2 to convert binary to decimal: ');

    if (operation === '1') {
        decimalNumber = await askForDecimal();
        binaryNumber = decimalNumber.toString(2);
        message = `${decimalNumber} in binary is ${binaryNumber}`;
    } else if (operation === '2') {
        binaryNumber = await askForBinary();
        decimalNumber = parseInt(binaryNumber, 2);
        message = `${binaryNumber} in decimal is ${decimalNumber}`;
    } else {
        console.log('The type of conversion is not chosen. Please restart the program.')
        return;
    }

    console.log(message);
};

main();

// Decimal/Binary conversion
// a) Write a program that asks the user for a number and then prints the binary representation of the number.
// (If you don’t know what a binary representation is, look it up. Computers use binary to represent
// numbers.)
// Note: e.g. 25 in binary is 11001
// b) Write another program that does the inverse operation - converting binary to decimal.