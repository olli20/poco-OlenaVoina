// Ex. 8.1.1 (*) - Manipulate the DOM
// a) Create an HTML file with at least 3 elements: 
// h1, p and and assign a new variable for each of these 3
// elements.
// b) For the h1 variable write a loop with 2 iterations, always adding the number of the iteration to the content
// of the tag (after the existing content).
// c) For the p variable write a loop with 4 iterations, always adding the number of the iteration to the content
// of the tag (before the existing content).
// d) For the a variable write a loop with 7 iterations, always replacing the content of the tag with the number
// of the iteration.

let title = document.getElementById("heading");
let pafagraf = document.getElementById("pafagraf");
let link = document.getElementById("link");


for (let i = 1; i < 2; i ++) {
  title.textContent += i.toString(); 
}

