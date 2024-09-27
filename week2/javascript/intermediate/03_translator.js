const readline = require('readline');

const validLangs = ['en', 'de', 'uk'];
let userLang;

// creatinge an interface to interact with the user in CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// aks the question
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

const askLang = async () => {
    let input;

    do {
        input = await askQuestion('Please choose the language (en, de oder uk): ');
        if (!validLangs.includes(input)) {
            console.log(`The program does not support ${input}`)
        }
    } while (!validLangs.includes(input))

    return input;
}

const hello = (lang = 'en') => {
    switch (lang) {
        case 'en':
            console.log('Hello World!');
            break;
        case 'de':
            console.log('Hallo Welt!');
            break;
        case 'uk':
            console.log('Привіт Світ!');
            break;
        default:
            console.log('Something went wrong.');
            return;
    }
    return;
}

const main = async () => {
    userLang = await askLang();
    rl.close();

    hello(userLang);
    return;
}

main();



// Ex. 4.2.3 (**) - The world translater ca. 30 min
// Write a function named helloWorld that:
// • Takes 1 argument, a language code (e.g. "es", "de", "en")
// • Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning
// English.
// Call the function for each of the supported languages and log the result to make sure it works.