// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
	today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Write a defining table and a function named countEvens that counts and returns the number of even integers in an array. The function must have this header:
function countEvens(list)
*/

//Function to test program
function testProgram () {
let numbers = [13, 2, 7, 26, 89, 4, 98];
//Displays numbers in the array
document.getElementById("array").innerHTML = numbers.toString();
//Displays numberr of even numbers in the array
document.getElementById("output").innerHTML = countEvens(numbers);
}


function countEvens(list) {
	//creates starting point for number of evens
	let evens=0;
	for (i=0; i < list.length; i++) {
	//Determines if number in list is even
	if (list[i] % 2 == 0) {
		evens++; 
		}
	}
	return evens;
}