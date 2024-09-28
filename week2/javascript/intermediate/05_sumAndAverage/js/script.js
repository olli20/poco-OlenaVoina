document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault();

    const numbers = [];

    for (let i = 1; i <= 5; i++) {
        const value = document.getElementById(`number${i}`).value;

        if (value === '') {
            alert('Please enter all five numbers.');
            return;
        }

        if (isNaN(Number(value))) {
            alert('All inputs must be valid numbers.');
            return;
        }

        numbers.push(Number(value));
    }

    // const num1 = document.getElementById('number1').value;
    // const num2 = document.getElementById('number2').value;
    // const num3 = document.getElementById('number3').value;
    // const num4 = document.getElementById('number4').value;
    // const num5 = document.getElementById('number5').value;

    // if (num1 === '' || num2 === '' || num3 === '' || num4 === '' || num5 === '') {
    //     alert("Please enter five numbers.");
    //     return;
    // }

    computeSumAndAverage(numbers);
});

document.getElementById('clear').addEventListener('click', event => {
    event.preventDefault();

    document.getElementById('form').reset();

    document.getElementById('result').innerHTML = '';
});

const computeSumAndAverage = (array) => {
    const sum = array.reduce((accumulator, item) => accumulator + item, 0);
    const average = sum / array.length;

    const displayResult = document.getElementById('result');

    displayResult.innerHTML = `
        <h2>Results:</h2>
        <p>The sum of the numbers is: ${sum}</p>
        <p>The average of the numbers is: ${average}</p>
    `;
}