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
            rl.close(); // close after getting the answer
            resolve(answer.trim());
        });
    });
};

const displayLog = (logs) => {
    logs.forEach((log, index) => {
        setTimeout(() => {
            console.log(`Step: ${log.iteration}, Fuel level: ${log.fuel}, Current altitude: ${log.altitude}`);
        }, index * delay); // delay each log by 500
    });
}

class Shuttle {
    constructor(altitudeStep = 50) {
        this.altitude = 0;
        this.altitudeStep = altitudeStep;
        this.fuelLevel = 0;
        this.astronautsAboard = 0;
        this.flightLog = [];
    }

    async askStartFuel() {
        let input;
        let startFuel;
        
        do {
            try {
                input = await askQuestion('Please enter the starting fuel level: ');
                startFuel = Number(input);

                if (isNaN(startFuel)) {
                    console.log('Not a valid format. Please enter a numeric value.');
                } else if (startFuel <= 5000 || startFuel >= 30000) {
                    console.log('The amount of fuel at launch must be greater than 5000 but less than 30000.'); 
                }    
            } catch (error) { 
                console.error('Error while getting the starting fuel level. The program will exit. ', error.message); 
                process.exit(1); // exit program
            } 
        } while (isNaN(startFuel) || startFuel <= 5000 || startFuel >= 30000);
            
        this.fuelLevel = startFuel;
    }

    async askAstronautsNumber() {
        let input;
        let astronauts;
    
        do {
            try {
                input = await askQuestion('Enter the number of astronauts: ');
                astronauts = Number(input);
    
                if (isNaN(astronauts)) {
                    console.log('Not a valid format. Please enter a numeric value.');
                } else if (astronauts < 1 || astronauts > 7) {
                    console.log('Please enter a number between 1 and 7.');
                }
            } catch (error) { 
                console.error('Error while getting the astronauts number. The program will exit. ', error.message);
                process.exit(1); // exit program
            } 
        } while (isNaN(astronauts) || astronauts < 1 || astronauts > 7);
            
        this.astronautsAboard = astronauts;
    }


    async flight () {
        await this.askStartFuel();
        await this.askAstronautsNumber(); 

        const fuelConsumption = 100 * this.astronautsAboard;
        let iteration = 1; // counts loop iteration

        while (this.fuelLevel > fuelConsumption) {
            this.fuelLevel = this.fuelLevel - fuelConsumption;
            this.altitude = this.altitude + this.altitudeStep;

            this.flightLog.push({
                iteration: iteration++,
                fuel: this.fuelLevel,
                altitude: this.altitude,
            });
        }
        return this.flightLog;
    }
}

// main function
const flightLaunch = async () => {
    const newShuttle = new Shuttle();

    console.log(legend);

    const log = await newShuttle.flight();

    if (log.length > 0) {
        console.log('The shuttle has launched without critical issues. \nWe are monitoring the process.');
        
        displayLog(log);

        const totalTime = log.length * delay;

        setTimeout(() => {
            console.log(`Done! The shuttle reached an altitude of ${newShuttle.altitude} kilometers.`);
        }, totalTime + delay);
    } else {
        console.log('Oops. Something went wrong.');
        return;
    }
}

flightLaunch();