const readline = require('readline');

const dictionary = require('./dictionary');

const availableLanguages = dictionary.map(item => item.id);

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

const askForLanguage = async () => {
    let userInput;

    do {
        try {
            userInput = await promptUser(`Please choose the language (${availableLanguages.join(', ')}): `);
            if (!availableLanguages.includes(userInput)) {
                console.log(`The program does not support ${userInput}`);
            }
        } catch (error) {
            console.error('Error while choosing a language: ', error.message); 
            return null;
        }
    } while (!availableLanguages.includes(userInput));

    return userInput;
}

const getTranslationData = (lang = 'en') => {
    const languageData = dictionary.find(item => item.id === lang);
    
    if (!languageData) {
        console.log('Language not found, default in English.');
        return dictionary.find(item => item.id === 'en');
    }

    return languageData;
}

const main = async () => {
    try {
        const selectedLanguage = await askForLanguage();

        if (!selectedLanguage) {
            console.log('An unexpected error occurred.');
            return;
        }

        const translationData = getTranslationData(selectedLanguage);

        const {name, text} = translationData;

        console.log(`${name}: ${text}`);

    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
    } finally {
        rl.close();
    }
};

main();

// Write a function named helloWorld that:
// • Takes 1 argument, a language code (e.g. "es", "de", "en")
// • Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning
// English.
// Call the function for each of the supported languages and log the result to make sure it works.