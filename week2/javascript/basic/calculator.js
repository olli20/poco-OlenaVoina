const readline = require('readline');

// creating interface to prompt through console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// wrap rl.question into a Promise
const askQuestion = (number) => {
    //open interfase
  return new Promise((resolve) => {
    rl.question(number, (answer) => {
      resolve(answer.trim());  //cut off empty symbols
    });
  });
}

// keep asking for an operation till valid
const askOperation = async () => {
    let operation;
    const validOperations = ['+', '-', '*', '/'];

    // repeat asking till input is valid
    do {
        operation = await askQuestion("Choose your operation (+, -, *, /): ");

        if (!validOperations.includes(operation)) {
            console.log("Invalid operation. Please enter one of (+, -, *, /).");
        }

    } while (!validOperations.includes(operation));

    return operation;
}

// keep asking for a number till valid
const askNumber = async (numberName) => {
    let number;

    // Loop till input is valid
    do {
        number = Number(await askQuestion("Enter the " + numberName + " number: "));

        // Check if the input is not a valid number
        if (isNaN(number)) {
            console.log("Please enter a number");
        }

    } while (isNaN(number)); // Continue asking till a valid number is entered

    return number; // Return the number as a number type
}

// async function to prompt the user and output the result

const main = async () => {
    // promt the user for input
    const operation = await askOperation()
    const firstNumber = await askNumber("first");
    const secondNumber = await askNumber("second");
  
    //close interface
    rl.close();

    //declaring variables for the result and a message
    let result;
    let message = "";

    //calculator
    if (operation === "+") {
        result = firstNumber + secondNumber;
        message = "The sum of the numbers is: " 
    } else if (operation === "-") {
        result = firstNumber - secondNumber;
        message = "The difference of the numbers is: " 
    } else if (operation === "*") {
        result = firstNumber * secondNumber;
        message = "The result of multiplying the numbers is: " 
    } else if (operation === "/") {
        result = firstNumber * secondNumber;
        message = "The result of the division of the numbers is: " 
    } else {
        console.log("Something went wrong"); 
    }

    console.log(message, result); 
}

main();