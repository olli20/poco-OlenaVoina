// to run: node 06_ageCalculator.js

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

const askBirthYear = async () => {
    const currentYear = new Date().getFullYear();
    let input;
    let birthYear;

    do {
        input = await askQuestion('In what year were you born (YYYY)? ');
        birthYear = Number(input);

        //validation
        if (isNaN(birthYear)) {
            console.log('Not a valid year format');
        } else if (birthYear < 1900 || birthYear > currentYear) {
            console.log(`The year of birth should be in the range 1900 - ${currentYear}`); 
        }    
    } while (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear);
        
    return birthYear;
}

const askFutureYear = async () => {
    const currentYear = new Date().getFullYear();
    let input;
    let futureYear;

    do {
        input = await askQuestion('What is the future year (YYYY)? ');;
        futureYear = Number(input);

        //validation
        if (isNaN(futureYear)) {
            console.log('Not a valid year format');
        } else if (futureYear <= currentYear) {
            console.log(`The future year is the year starting from ${currentYear}.`); 
        } 
    } while (isNaN(futureYear) || futureYear <= currentYear);
        
    return futureYear;
}

const calculateAge = async () => {
    const birthYear = await askBirthYear();
    const futureYear = await askFutureYear();

    // calculate the difference
    const ageInFuture = futureYear - birthYear;

    console.log(`I will be either ${ageInFuture - 1} or ${ageInFuture} in ${futureYear}`);
    return;
}

calculateAge();
