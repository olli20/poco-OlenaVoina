const readline = require('readline');

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
};

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
    const name = await askQuestion('Hello! What is yor name? ');
    
    const message = getMessage();
    console.log(`${message}, ${name}!`);
}

greeting();