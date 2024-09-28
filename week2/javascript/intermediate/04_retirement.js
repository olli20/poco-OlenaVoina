
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // aks the question
  const promptUser = (question) => {
      return new Promise((resolve) => {
          rl.question(question, (answer) => {
              resolve(answer.trim());
          });
      });
  }

  // variables
  const currentYear = new Date().getFullYear();
  let currentAge;
  let retirementAge;
  let yearsTillRetirement;
  let retirementYear;

  //function, that returns an async function, that asks a specific year and validate the range
  const askAge = (question, topic, min, max = 120) => {
      return async function () {
        let input;
        let age;
        
        do {
            try {
                input = await promptUser(question);
                age = Number(input);
    
                //validation
                if (isNaN(age)) {
                    console.log(`Not a valid ${topic} format`);
                } else if (age < min || age > max) {
                    console.log(`The ${topic} should be between ${min} and ${max}.`); 
                }    
            } catch (error) { 
                console.error(`Error while getting ${topic}: `, error.message); 
            } 
        } while (isNaN(age) || age < min || age > max);
            
        return age;
      };  
  };

  const main = async () => {

    const askCurrentAge = askAge("Please enter your age? ", "age", 1, 100);
  
    // prompt for current age
    currentAge = await askCurrentAge();
  
    const askRetirementAge = askAge("Your retirement age? ", "retirement age", currentAge, 100);

    // prompt for retirement age
    retirementAge = await askRetirementAge();

    rl.close();

    // calculating years until retirement
    yearsTillRetirement = retirementAge - currentAge;

    // calcilating the year of retirement
    retirementYear = currentYear + yearsTillRetirement;

    console.log('********************************************')
    console.log(`You have ${yearsTillRetirement} years left until you can retire.`);
    console.log(`It is ${currentYear}, so you can retire in ${retirementYear}.`);
    console.log('Thank you for using this program');

    return;
  }
 
  main();


// Retirement calculator
// Create a program that determines how many years you have left until retirement and the year you can retire.
// It should prompt for your current age and the age you want to retire and display the output as shown in the
// example below.
// • What is your current age? 25
// • At what age would you like to retire? 65
// • You have 40 years left until you can retire.
// • It’s 2024, so you can retire in 2064.