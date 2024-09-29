const readline = require('readline');

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

const startMessage = 'The password must \nbe at least be 8 characters long \ninclude 1 special symbol \ninclude 1 number \nnot include a space or either';

const askPassword = async () => {
    let input;


    do {
            input = await promptUser('Please enter a valid wassword: ');

            // validation
            if (!/^[01]+$/.test(binary)) {
                console.log('Invalid binary number. Please use only 0 and 1.');
            }

    } while (isNaN(number));

}

const main = async () => {
    console.log(startMessage);
}






// a) Write a program that asks the user for a password and checks if it is valid. The password must
// • at least be 8 characters long
// • include 1 special symbol
// • include 1 number
// • not include a space or either
// b) Write a program that generates a password according to the requirements above. Use your validator
// written in a).