const readline = require('readline');

// creating interface to prompt through console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// wrap rl.question into a Promise
const askQuestion = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim());  
    });
  });
}

// Async function to prompt the user and output the result

const main = async () => {

  const firstName = await askQuestion("Write your first name: ");
  const lastName = await askQuestion("Write your last name: ");

  rl.close();

  const fullName = firstName + " " + lastName;
  console.log("The full name is: ", fullName); 
}

main();