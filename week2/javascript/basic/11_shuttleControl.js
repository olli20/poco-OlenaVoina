// the task description can be found at the bottom of the code

const readline = require('readline');

// variables
const mainLegend = 'You are the head of NASA, launching a new shuttle mission. You must decide how much fuel the shuttle needs for launch and how many astronauts will be on board. The technical constraints require the fuel level at launch to be greater than 5000 gallons but less than 30000 gallons. The shuttle can carry up to 7 astronauts.'

let fuelLevel; // must be greater than 5000 but less than 30000 and never reach 0
let astronautsAboard; // 1 - 7
let altitude = 0;  // 0 till the shuttle is on the ground

// interface for interaction with user in CLI
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

// functions to handle user input and validation
const askStartFuel = async () => {
    let input;
    let startFuel;

    // Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive value greater than 5000 but less than 30000.
    
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

    // Use a second loop to query the user for the number of astronauts (up to a maximum of 7). 
    // Validate the entry by having the loop continue until the user enters an integer from 1 - 7.

    do {
        try {
            input = await askQuestion('Enter the number of astronauts: ');
            astronauts = Number(input);

            //validation
            if (isNaN(astronauts)) {
                console.log('Not a valid format. Please enter a numeric value.');
            } else if (astronauts < 1 || astronauts > 7) {
                console.log('Please enter a number between 1 and 7.'); 
            }    
        } catch (error) { 
            console.error('Error while getting the astronauts number. ', error.message); 
        } 
    } while (isNaN(astronauts) || astronauts < 1 || astronauts > 7);
        
    return astronauts;
}

// main function
const flight = async () => {
    console.log(mainLegend);

    //ask for fuel
    fuelLevel = await askStartFuel();

    //ask for astronauts
    astronautsAboard = await askAstronautsNumber(); 

    // close the readline interface
    rl.close(); 

    console.log('The shuttle has launched without critical issues. \nWe are monitoring the process.')

    // Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might ot reach 0)

    const fuelConsumption = 100 * astronautsAboard;
    const altitudeStep = 50;

    while (fuelLevel > fuelConsumption) {
        fuelLevel = fuelLevel - fuelConsumption;
        altitude = altitude + altitudeStep;
        console.log(`Fuel level: ${fuelLevel} \nCurrent altitude: ${altitude} \n***********************`);
    }

    console.log(`Done! The shuttle reached the altitude ${altitude}!`)
}

flight();



// Play with while loop
// Define three variables for the LaunchCode shuttle:
// • one for the starting fuel level,
// • another for the number of astronauts aboard,
// • and the third for the altitude the shuttle reaches.
// Construct while loops to do the following:
// a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive
// value greater than 5000 but less than 30000.
// b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
// entry by having the loop continue until the user enters an integer from 1 - 7.
// c) Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the
// fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The
// loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
// not reach 0).