const readline = require('readline');


// wrap rl.question into a Promise
const askQuestion = (prompt) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim());  
    });
  });
}

// Async function to prompt the user and calculate the sum
const main = async () => {
  const firstNumber = await askQuestion("Write your first number: ");
  const lastNumber = await askQuestion("Write your last number: ");

  const sum = Number(firstNumber) + Number(lastNumber);
  console.log("The sum is: ", sum); 
}

main();