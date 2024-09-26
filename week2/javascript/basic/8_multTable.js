const multTable = (number) => {
    console.log(`The multiplication table of the number ${number}:`)
    for (let i = 0; i <= 10; i++) {
        const result = number * i;
        console.log(`${7} * ${i} = ${result}`);
    }
    return;
}

multTable(7);