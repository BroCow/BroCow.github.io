// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
	today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Write a defining table and a function to multiply each element in an array by some value. The function must have this header:
function multiply(list, multiplier)
If the multiply function were called like this:

var list = [ 17, 8, 9, 5, 20 ];
var products = multiply(list, 3);
The multiply function would return an array with these values: [ 51, 24, 27, 15, 60 ]
*/


function doIt () {
let list = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let factor = 2; 
document.getElementById("array").innerHTML = list.toString();
document.getElementById("factor").innerHTML = factor;
document.getElementById("output").innerHTML = multiply(list, factor);
}


function multiply(list, multiplier) {
	let products = "";
	for (i=0; i < list.length; i++) {
		let answer = list[i] * multiplier; 
		products+= answer + ", "; 
		}
	return products;
}