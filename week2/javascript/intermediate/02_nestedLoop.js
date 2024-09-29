// to run: node 02_nestedLoop.js

const readline = require('readline');

const multTable = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
      
    for (let i = 1; i <= 10; i = i + 1) {
        if (i < 10) {
            rl.write(` ${i}  | `);  
        } else {
            rl.write(`${i}  | `);
        }
                
        for (let j = 1; j <= 10; j = j + 1) {
            const multiply = i * j;

            if (multiply < 10) {
                rl.write(`  ${multiply} `);
            } else if (multiply >= 10 && multiply < 100) {
                rl.write(` ${multiply} `);
            } else {
                rl.write(`${multiply} `);
            } 
        }
        
        rl.write('\n');

        if (i===1) {
            rl.write('----------------------------------------------\n');
        }
    }

    rl.close();
    return;
}

multTable();

// Write a program that prints a multiplication table for numbers up to 10. (use nested loops)