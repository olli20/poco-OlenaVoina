const readline = require('readline');

//create readline interface for prompting in cli
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer.trim());  
      });
    });
}

const getMessage = () => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
        return 'Good Morning';
      } else if (currentTime >= 12 && currentTime < 17) {
        return 'Good Afternoon';
      } else if (currentTime >= 17 && currentTime < 23) {
        return 'Good Evening';
      } else if (currentTime >= 23 && currentTime < 6) {
        return "Good Night";
      } else {
        return "Hello";
      }
}

const greeting = async () => {
    const name = await prompt('Hello! What is yor name? ');
    
    rl.close();
    
    const message = getMessage();
    console.log(`${message}, ${name}!`);
}

greeting();