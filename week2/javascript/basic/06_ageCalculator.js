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

const askBirthYear = async () => {
    const currentYear = new Date().getFullYear();
    let input;
    let birthYear;

    do {
        try {
            input = await askQuestion('I was born in (YYYY) ');
            birthYear = Number(input);

            //validation
            if (isNaN(birthYear)) {
                console.log('Not a valid year format');
            } else if (birthYear < 1900 || birthYear > currentYear) {
                console.log(`The year of birth should be in the range 1900 - ${currentYear}`); 
            }    
        } catch (error) { 
            console.error('Error while getting a year: ', error.message); 
        } 
    } while (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear);
        
    return birthYear;
}

const askFutureYear = async () => {
    const currentYear = new Date().getFullYear();
    let input;
    let futureYear;

    do {
        try {
            input = await askQuestion('The future year (YYYY) is ');;
            futureYear = Number(input);

            //validation
            if (isNaN(futureYear)) {
                console.log('Not a valid year format');
            } else if (futureYear <= currentYear) {
                console.log(`The future year is the year starting from ${currentYear}.`); 
            }    
        } catch (error) { 
            console.error('Error while getting a year: ', error.message); 
        } 
    } while (isNaN(futureYear) || futureYear <= currentYear);
        
    return futureYear;
}

const calculateAge = async () => {
    const birthYear = await askBirthYear();
    const futureYear = await askFutureYear();

    // close the readline interface
    rl.close(); 

    // calculate the difference
    const ageInFuture = futureYear - birthYear;

    console.log(`I will be either ${ageInFuture - 1} or ${ageInFuture} in ${futureYear}`);
    return;
}

calculateAge();
