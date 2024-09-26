const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer.trim());  
      });
    });
}

const askNumber = async () => {
    const input = await askQuestion('Please provide a number: ');

    //close readline interface as we are done with the input
    rl.close(); 

    const convertedInput = Number(input);
    
    if (isNaN(convertedInput)) {
        console.log('Oops, it is not a number');
        return null;
    }

    return convertedInput;
}

const checkEvenOdd = (number) => {
    // if (number % 2 === 0) {
    //     return "even";
    // } else {
    //     return "odd";
    // }

    return number % 2 === 0 ? "even" : "odd";
}

const main = async () => {
    const input = await askNumber();

    if (input !== null) {
        console.log('The number is', checkEvenOdd(input));
    }

    return;
}

main();