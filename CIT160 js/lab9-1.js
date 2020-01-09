/*Write a defining table and a program that that outputs the times table from 1 to 12 for any positive integer that the USER INPUTS from 1 to 10 inclusive.
Your output should look like the following example given that the user entered 5:

          5 x 1 = 5
          5 x 2 = 10

INPUT: Get positive integer from box labeled "Enter Positive Integer"
PROCESSING: Multiply the number entered by 1, then continue to multiply number by all numbers 1-12.
OUTPUT: Show table of number entered times all numbers 1-12
*/

function showTable() {
	let number = parseInt(document.getElementById("number").value);
	let timeTable = "";

	for (let i = 1; i <= 12; i++) {
		timeTable += number + "x" + i + "=" + number * i + "<br>";
	}

	document.getElementById("output").innerHTML = timeTable;
}
