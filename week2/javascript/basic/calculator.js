const readline = require('readline');

// creating interface to interact with a user in console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// aks the question
const askQuestion = (question) => {
    return new Promise((resolve) => {
        //open interfase
        rl.question(question, (answer) => {
            resolve(answer.trim());  //return an answer without extra spaces
        });
    });
}

// ask for an operation till valid
const askOperation = async () => {
    let operation;
    const validOperations = ['+', '-', '*', '/'];

    // repeat asking till input is valid
    do {
        try {
            operation = await askQuestion('Choose your operation (+, -, *, /): ');

            if (!validOperations.includes(operation)) {
                console.log('Invalid operation. Please enter one of (+, -, *, /).');
            }
        } catch {
            console.error(error.message); 
        }
    } while (!validOperations.includes(operation));

    return operation;
}

// ask for a number till valid
const askNumber = async (numberName) => {
    let number;

    // loop till input is valid
    do {
        try {
            input = await askQuestion(`Enter the ${numberName} number: `);
            number = Number(input);

            // Check if the input is not a valid number
            if (isNaN(number)) {
                console.log('Please enter a number');
            }
        } catch (error) {    // Handle error
            console.error(error.message); 
        } 
    } while (isNaN(number));
        
    return number;
}

const getMessage = (operation, number1, number2, result) => {
    if (operation === '+') {
        return `The sum of the numbers ${number1} and ${number2} is ${result}`;
    } else if (operation === "-") {
        return `The difference of the numbers ${number1} and ${number2} is ${result}`
    } else if (operation === "*") {
        return `The result of multiplying the numbers ${number1} and ${number2} is ${result}`
    } else if (operation === "/") {
        return `The result of the division of the numbers ${number1} and ${number2} is ${result}` 
    } else {
        console.log('Something went wrong'); 
    }
}

const main = async () => {
    // promt the user for input
    try {
        const operation = await askOperation()
        const firstNumber = await askNumber('first');
        const secondNumber = await askNumber('second');
  
        //close interface
        rl.close();

        let result;

        //calculator
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                if (secondNumber === 0) {
                    console.log('Error: Division by zero is not allowed.');
                    return;
                }
                result = firstNumber / secondNumber;
                break;
            default:
                console.log('Something went wrong.');
                return;
        }  

    console.log(getMessage(operation, firstNumber, secondNumber, result)); 
    } catch {
        console.error('Something went wrong. Error message: ', error.message);
        rl.close();
    }
}

main();