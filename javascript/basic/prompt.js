const readline = require('readline');

// creating interface to prompt through console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// wrap rl.question into a Promise
const askQuestion = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

// Async function to prompt the user and calculate the sum
const main = async () => {
  const firstNumber = await askQuestion("Write your first number: ");
  const lastNumber = await askQuestion("Write your last number: ");

  rl.close();

  const sum = Number(firstNumber) + Number(lastNumber);
  console.log("The sum is: ", sum); 
}

main();