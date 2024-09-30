const readline = require('readline');

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

// Async function to prompt the user and output the result

const main = async () => {

  const firstName = await askQuestion("Write your first name: ");
  const lastName = await askQuestion("Write your last name: ");

  const fullName = firstName + " " + lastName;
  console.log("The full name is: ", fullName); 
}

main();