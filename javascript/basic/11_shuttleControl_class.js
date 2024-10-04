// to run: node 11_shuttleControl_class.js

const readline = require('readline');

// variables
const legend = 'You are the head of NASA, launching a new shuttle mission. You must decide how much fuel the shuttle needs for launch and how many astronauts will be on board. The technical constraints require the fuel level at launch to be greater than 5000 gallons but less than 30000 gallons. The shuttle can carry up to 7 astronauts.'
const delay = 500; // delay for displaying logs

const askQuestion = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close(); // close readline after getting the answer
            resolve(answer.trim());
        });
    });
};

class Shuttle {
    altitude = 0;
    fuelLevel = 0;
    astronautsAboard = 0;
    fuelConsumption = 0;
    fuelProAstronaut = 100;
    flightLog = [];
    altitudeStep;

    constructor(altitudeStep = 50) {
        this.altitudeStep = altitudeStep;
    }

    async askStartFuel() {
        let input;
        let startFuel;

        do {
                input = await askQuestion('Please enter the starting fuel level: ');
                startFuel = Number(input);

                if (isNaN(startFuel)) {
                    console.log('Not a valid format. Please enter a numeric value.');
                } else if (startFuel <= 5000 || startFuel >= 30000) {
                    console.log('The amount of fuel at launch must be greater than 5000 but less than 30000.'); 
                }    
        } while (isNaN(startFuel) || startFuel <= 5000 || startFuel >= 30000);
 
        this.fuelLevel = startFuel;
    }

    async askAstronautsNumber() {
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

        this.astronautsAboard = astronauts;
        this.fuelConsumption = this.fuelProAstronaut * this.astronautsAboard;
    }

    async flight () {
        await this.askStartFuel();
        await this.askAstronautsNumber(); 

        let iteration = 1; // counts loop iteration

        while (this.fuelLevel > this.fuelConsumption) {
            this.fuelLevel = this.fuelLevel - this.fuelConsumption;
            this.altitude = this.altitude + this.altitudeStep;

            this.flightLog.push({
                iteration: iteration++,
                fuel: this.fuelLevel,
                altitude: this.altitude,
            });
        }
        return this.flightLog;
    }
};

// new variant of handling the dalay 
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// main function
const flightLaunch = async () => {
    const myShuttle = new Shuttle();

    console.log(legend);

    const logs = await myShuttle.flight();

    if (logs.length > 0) {
        console.log('The shuttle has launched without critical issues. \nWe are monitoring the process.');

        for (let log of logs) {
            console.log(`Step: ${log.iteration}, Fuel level: ${log.fuel}, Current altitude: ${log.altitude}`);
            await sleep(delay);
        }
            
        console.log(`Done! The shuttle reached an altitude of ${myShuttle.altitude} kilometers.`);
    } else {
        console.log('Oops. Something went wrong.');
        return;
    }
};

flightLaunch();