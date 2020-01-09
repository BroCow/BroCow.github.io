// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
	today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Rewrite the number guessing game code found in review question 14 from the assigned reading so that it counts the number of guesses the user takes to guess correctly the answer. Update the program given in the example to use let versus var.  In addition, do NOT use alert but rather output the final message to a div on the screen with the count. 

INPUT: Get number from box labeled "Enter Number"
PROCESSING: Createc
OUTPUT: 
*/

function numberGuessGame() {
	let message =
		"I'm thinking of a number between 1 and 100.\n" +
		"Try to guess it!\n" +
		"Please enter an integer between 1 and 100.";
	let answer = 38;
	let guess;
	let numberGuesses = 0;
	do {
		guess = parseInt(prompt(message));
		if (guess < answer) {
			message = guess + " is too low. Please enter another integer.";
		} else if (guess > answer) {
			message = guess + " is too high. Please enter another integer.";
		}
		numberGuesses++;
	} while (guess != answer);
	message = guess + " is correct!";

	document.getElementById("output").innerHTML =
		message + " You got it in " + numberGuesses + " guesses!";
}