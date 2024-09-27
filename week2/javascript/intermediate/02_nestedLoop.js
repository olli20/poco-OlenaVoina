
const readline = require('readline');

//create readline interface for prompting in cli
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const multTable = () => {
    for (let i = 1; i <= 10; i = i + 1) {
        rl.write(`${i}  |  `);

        
        for (let j = 1; j <= 10; j = j + 1) {
            rl.write(` ${i * j} `);
        }
        
        rl.write('\n');
    }

    rl.close();
    return;
}

multTable();

// Write a program that prints a multiplication table for numbers up to 10. (use nested loops)