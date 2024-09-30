// Retirement calculator
// To run in CLI: node 04_retirement.js

const readline = require('readline');

// variables
const currentYear = new Date().getFullYear();
let currentAge;
let retirementAge;
let yearsTillRetirement;
let retirementYear;

const promptUser = (question) => {
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

// function that returns an async function to ask for a specific age and validate
const askAge = (question, topic, min, max = 120) => {
    return async function () {
        let input;
        let age;
        
        do {
            input = await promptUser(question);
            age = Number(input);

            //validation
            if (isNaN(age)) {
                console.log(`The input expects a number.`);
            } else if (age < min || age > max) {
                console.log(`The ${topic} should be between ${min} and ${max}.`); 
            }    
        } while (isNaN(age) || age < min || age > max);
            
        return age;
    };  
};

const main = async () => {

    const askCurrentAge = askAge("Please enter your age: ", "age", 1, 100);

    currentAge = await askCurrentAge();

    const askRetirementAge = askAge("At what age do you want to retire? ", "retirement age", currentAge, 120);

    retirementAge = await askRetirementAge();

    // calculating years until retirement
    yearsTillRetirement = retirementAge - currentAge;

    // calculating the year of retirement
    retirementYear = currentYear + yearsTillRetirement;

    console.log('********************************************');

    if (yearsTillRetirement === 1) {
        console.log(`You have ${yearsTillRetirement} year left until you can retire.`);
    } else if (yearsTillRetirement === 0) {
        console.log(`You are retiring in the current year, ${retirementYear}.\n`);
    } else {
        console.log(`You have ${yearsTillRetirement} years left until you can retire.`);
    }

    if (currentYear !== retirementYear) {
        console.log(`It is ${currentYear}, so you can retire in ${retirementYear}.\n`);
    }
    
    console.log('********************************************');
    console.log('Thank you for using this program!');

    return;
}

main();

// Create a program that determines how many years you have left until retirement and the year you can retire.
// It should prompt for your current age and the age you want to retire and display the output as shown in the
// example below.
// • What is your current age? 25
// • At what age would you like to retire? 65
// • You have 40 years left until you can retire.
// • It’s 2024, so you can retire in 2064.