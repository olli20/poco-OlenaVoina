// to run: node calculator.js

const readline = require('readline');

// aks the question
const askQuestion = (question) => {
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
}

// ask for an operation till valid
const askOperation = async () => {
    let operation;
    const validOperations = ['+', '-', '*', '/'];

    do {
        operation = await askQuestion('Choose your operation (+, -, *, /): ');

        if (!validOperations.includes(operation)) {
            console.log('Invalid operation. Please enter one of (+, -, *, /).');
        }
    } while (!validOperations.includes(operation));

    return operation;
}

// ask for a number till valid
const askNumber = async (numberName) => {
    let number;

    // loop till input is valid
    do {
        let input = await askQuestion(`Enter the ${numberName} number: `);
        number = Number(input);

        if (isNaN(number)) {
            console.log('Please enter a number');
        }
    } while (isNaN(number));
        
    return number;
}

const getMessage = (operation, number1, number2, result) => {
    switch (operation) {
        case '+':
          return `The sum of the numbers ${number1} and ${number2} is ${result}`;
        case '-':
          return `The difference of the numbers ${number1} and ${number2} is ${result}`;
        case '*':
          return `The result of multiplying the numbers ${number1} and ${number2} is ${result}`;
        case '/':
          return `The result of dividing the numbers ${number1} by ${number2} is ${result}`;
    }
}

const main = async () => {
    try {
        let result;

        // promt the user for input
        const operation = await askOperation()
        const firstNumber = await askNumber('first');
        const secondNumber = await askNumber('second');

        // calculator logic
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
    
        console.log(getMessage(operation, firstNumber, secondNumber, result)); // display the result

    } catch (error) {
        console.error('Something went wrong. Error message: ', error.message);
    return;
    }
}

main();