// to run: node 11_shuttleControl.js ()

const readline = require('readline');

// variables
const mainLegend = 'You are the head of NASA, launching a new shuttle mission. You must decide how much fuel the shuttle needs for launch and how many astronauts will be on board. The technical constraints require the fuel level at launch to be greater than 5000 gallons but less than 30000 gallons. The shuttle can carry up to 7 astronauts.'

let fuelLevel; // must be greater than 5000 but less than 30000 and never reach 0
let astronautsAboard; // 1 - 7
let altitude = 0;  // 0 till the shuttle is on the ground
const altitudeStep = 50;
const delay = 500; // delay for displaying logs

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

// functions to handle user input and validation
const askStartFuel = async () => {
    let input;
    let startFuel;
    
    do {
        try {
            input = await askQuestion('Please enter the starting fuel level: ');
            startFuel = Number(input);

            //validation
            if (isNaN(startFuel)) {
                console.log('Not a valid format. Please enter a numeric value.');
            } else if (startFuel <= 5000 || startFuel >= 30000) {
                console.log('The amount of fuel at launch must be greater than 5000 but less than 30000.'); 
            }    
        } catch (error) { 
            console.error('Error while getting the starting fuel level. ', error.message); 
        } 
    } while (isNaN(startFuel) || startFuel <= 5000 || startFuel >= 30000);
        
    return startFuel;
}

const askAstronautsNumber = async () => {
    let input;
    let astronauts;

    do {
        input = await askQuestion('Enter the number of astronauts: ');
        astronauts = Number(input);

        if (isNaN(astronauts)) {
            console.log('Not a valid format. Please enter a numeric value.');
        } else if (astronauts < 1 || astronauts > 7) {
            console.log('Please enter a number between 1 and 7.'); 
        }    
    } while (isNaN(astronauts) || astronauts < 1 || astronauts > 7);
        
    return astronauts;
}

// display flight log with delay
const displayLog = (logs) => {
    logs.forEach((log, index) => {
        setTimeout(() => {
            console.log(`Step: ${log.iteration}, Fuel level: ${log.fuel}, Current altitude: ${log.altitude}`);
        }, index * delay); // delay each log by 500
    });
}

// main function
const flight = async () => {
    const flightLog = []; // array will store the information about the flight

    console.log(mainLegend);

    fuelLevel = await askStartFuel();
    astronautsAboard = await askAstronautsNumber(); 

    console.log('The shuttle has launched without critical issues. \nWe are monitoring the process.')

    const fuelConsumption = 100 * astronautsAboard;
    let iteration = 1; // counts loop iteration

    // loop proceeds the flight and log it in the array.
    while (fuelLevel > fuelConsumption) {
        fuelLevel = fuelLevel - fuelConsumption;
        altitude = altitude + altitudeStep;

        // store each iteration in the array as an object with iteration number, fuel level and altitude
        flightLog.push({
            iteration: iteration++,
            fuel: fuelLevel,
            altitude: altitude,
        });
    }

    displayLog(flightLog);

    // time to display all the logs
    const totalTime = flightLog.length * delay;

    // display the final message after all the logs have been displayed
    setTimeout(() => {
        console.log(`Done! The shuttle reached an altitude of ${altitude} kilometers.`);
    }, totalTime);
}

flight();