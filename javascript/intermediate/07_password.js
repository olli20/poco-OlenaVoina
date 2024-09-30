//to run: 07_password.js

const readline = require('readline');

const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)[^\s]{8,}$/; // /...../  - Regular expression
const startMessage = 'The password must: \n* be at least be 8 characters long \n* include 1 special symbol \n* include 1 number \n* not include a space or either';
let password;

const promptUser = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

const askPassword = async () => {
    let input;
    let counter = 0;

    do {
        counter++;
        input = await promptUser('Please enter a valid password: ');

        // validation
        if (!passwordRegex.test(input)) {
            console.log(startMessage);
        } else {
            return input;
        }

    } while (counter <= 10);

    return null;
}

const main = async () => {
    console.log(startMessage);

    password = await askPassword();

    if (password === null) {
        console.log('You have reached the maximum number of attempts.');
        console.log('Please take a break and try again later.');
        return;
    } 
    console.log('Congratulations! You password is valid and secure!');
}

main();

// a) Write a program that asks the user for a password and checks if it is valid. The password must
// • at least be 8 characters long
// • include 1 special symbol
// • include 1 number
// • not include a space or either
// b) Write a program that generates a password according to the requirements above. Use your validator
// written in a).