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

const askAge = async () => {
    let input;
    let age;

    do {
        try {
            input = await askQuestion('What is your age? ');
            age = Number(input);

            //validation
            if (isNaN(age)) {
                console.log('Please enter a number');
            } else if (age <= 0 || age >= 120) {
                console.log(`The age should be in the range 1 - 120`); 
            }    
        } catch (error) { 
            console.error('Error while getting an age: ', error.message); 
        } 
    } while (isNaN(age) || age <= 0 || age >= 120);

    rl.close(); 

    return age;
}

const keylessCar = async () => {
    const userAge = await askAge();

    if (userAge < 18) {
        console.log('Sorry, you are too young to drive this car. Powering off');
    } else if (userAge === 0) {
        console.log('Congratulations on your first year of driving. Enjoy the ride!');
    } else {
        console.log('Powering On. Enjoy the ride!');
    }

    return;
}

keylessCar();