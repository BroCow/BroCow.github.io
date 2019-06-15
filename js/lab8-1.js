// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Write a defining table and a program that asks the user for an integer input and have the program output the sum of all the odd integers between 1 and then integer that the user inputted, inclusive (this means include 1 and the number if odd). There is no set looping method that you should use, however, you MUST use a loop presented in the lesson to solve the problem.

INPUT: Get number from input box labeled "Enter Number"
PROCESSING: Create counting loop that starts at 1 and counts to the number entered. Beginning with the number 1 as the sum, add each odd numbers in the count to create a new sum. 
OUTPUT: Display the sum of all the odd numbers 
*/

function addOdds() {
	
	let number = document.getElementById('number').value;
	let sum = 0;
	
	for (let i = 1; i <= number; i++) {
		if (i%2 != 0) {
			sum += i;
		}		
	}
		
	document.getElementById('output').innerHTML = sum;
}