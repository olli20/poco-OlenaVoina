4 JavaScript Exercises
4.1 Basic Exercises
Ex. 4.1.1 (*) - Play with data types, operations and comparisons
Guess what answers you would get if you ran this in the JavaScript Console of your browser. Once you have
an answer to the questions check the answers by copying them and running it in the console yourself line by
line
a) Evaluate the below:
• 5 + "34"
• 5 - "4"
• 10 % 5
• 5 % 10
• "Java" + "Script"
• " " + " "
• " " + 0
• true + true
• true + false
• false + true
• false - true
• 3 - 4
• "Bob" - "bill"
b) Evaluate the below comparisons:
• 5 >= 1
• 0 === 1
• 4 <= 1
• 1 != 1
• "A" > "B"
• "B" < "C"
• "a" > "A"
• "b" < "A"
• true === false
• true != true
c) Make the string: "Hi There! It's "sunny" out" by using the + sign

Ex. 4.1.2 (*) - Evaluate
Evaluate what answers you would get if you ran this in the JavaScript Console in Google Chrome. Answer the
questions then check them by copying them and running it in the console yourself line by line
a) Add two variables firstName and lastName, so that they equal your name.
b) Create a variable that holds the answer of firstName + " " + lastName.
c) Evaluate this question: what is a + b in the following code?
1 var a = 34;
2 var b = 21;
3 var c;
4 a = 2;
5 a + b
6
d) What is c equal to?


! Ex. 4.1.3 (*) - Hello World!
Write a program that prints a Hello, World! message in the console of a web browser.

! Ex. 4.1.4 (*) - Greetings to you
Write a program that
• asks for the user’s name
• and then prints a greeting message in the console of a web browser.

! Ex. 4.1.5 (*) - Even or Odd
Write a program that asks for the user to input a number:
• If the number is even, print "The number is even."
• If the number is odd, print "The number is odd."
• If it is not a number, print "This is not a number."

! Ex. 4.1.6 (*) - Age Calculator
Want to find out how old you’ll be? Calculate it!
• Use prompt() and alert().
• Ask user for birth year.
• Ask user for a future year.
• Calculate the 2 possible ages for the given year.
• Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
2026.
Additional Task: Ask for precise dates.

! Ex. 4.1.7 (*) - Make a keyless car
This car will only let you drive if you are over 18. Make it do the following:
• Use prompt() and alert().
• Ask a user for their age.
• IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"
• IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"
• IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
! Ex. 4.1.8 (*) - Print multiplication table
Write a program that prints the multiplication table of the number 7. (Use a loop)
! Ex. 4.1.9 (*) - Play with for loop
Construct for loops that accomplish the following tasks:
• Print the numbers 0 - 20, one number per line.
• Print only the ODD values from 3 - 29, one number per line.
• Print the EVEN numbers 12 down to -14 in descending order, one number per line.
• Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

10 September, 2024

Monday 23rd September, 2024

Ex. 4.1.10 (*) - Play with arrays and for loop
Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
construct for loops to accomplish the following tasks:
a) Print each element of the array to a new line.
b) Print each character of the string -in reverse order- to a new line.
Ex. 4.1.11 (*) - Play with while loop
Define three variables for the LaunchCode shuttle:
• one for the starting fuel level,
• another for the number of astronauts aboard,
• and the third for the altitude the shuttle reaches.
Construct while loops to do the following:
a) Prompt the user to enter the starting fuel level. The loop should continue until the user enters a positive
value greater than 5000 but less than 30000.
b) Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
entry by having the loop continue until the user enters an integer from 1 - 7.
c) Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the
fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers. (Hint: The
loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel level might
not reach 0).
Ex. 4.1.12 (*) - Fix the code
The intended behavior is to increment by one but why is this function not working? Can you fix this? (try to
solve this on paper first and then debug the code)
1 function incrementItems (arr) {
2 for ( let i = 0; i < array . length ; i++)
3 arr [i] === arr[i] + 1
4 return array
5 }
Expected behaviour: Input -> Output
1 incrementItems ([0 , 1, 2 , 3]) -> [1 , 2 , 3 , 4]
2 incrementItems ([2 , 4, 6 , 8]) -> [3 , 5 , 7 , 9]
3 incrementItems ([ -1 , -2 , -3 , -4]) -> [0 , -1 , -2 , -3]