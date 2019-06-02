/* Defining Table
Write a program to quiz a child on simple addition. The program should randomly create two positive integers of max values of 100 and display those integers along with the addition symbol (+) and then allow a child to enter the answer. The program should compute the correct answer and compare it to the child’s answer and output “Correct! Good job.” or “Sorry. That is incorrect.” 

INPUT: get answer to addition problem by user text input 
PROCESSING: Generate two random integers between 1-100 with a + sign as an addition problem.   Assign variable "firstNumber" to randomly generate. Assign variable "secondNumber" to randomly generate. Let "answer" equal the sum of "firstNumber" and "secondNumber".  Write if/either statements to compare entered answer to correct answer and display appropriate text. Button labeled "Check Answer" initiates function.
OUTPUT: Display "Correct! Good job." or "Sorry. That is incorrect."
*/

const MAX = 100;
let firstNumber = Math.floor(Math.random() * Math.floor(MAX));
let secondNumber = Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('firstNumber').innerHTML = firstNumber;
document.getElementById('secondNumber').innerHTML = secondNumber;

function checkAnswer() {
	//input
	let firstNumber = parseInt(document.getElementById('firstNumber').innerHTML);
	let secondNumber = parseInt(document.getElementById('secondNumber').innerHTML);
	let correctAnswer = firstNumber + secondNumber;
	let givenAnswer = parseInt(document.getElementById('givenAnswer').value);
	
	let message = "";
	if(givenAnswer == correctAnswer) {
		message = "Correct! Good job."
		 }	
	else {
		message = "Sorry. That is incorrect. The answer is " + correctAnswer + ".";
	}
	//output
	document.getElementById('result').innerHTML = message;
}