
/* Defining Table
INPUT:  Get city, state, and zip code from three different input boxes label city, state and zipCode
PROCESSING:  Add the three inputs together along with commas and store in sum
OUTPUT:  Display address on the document
*/

function addNumbers() {
	//INPUT
	let city = (document.getElementById('city').value);
	let state = (document.getElementById('state').value);
	let zipCode = (document.getElementById('zipCode').value);
	//Processing
	let sum = city + ", " + state + "  " + zipCode;
	//OUTPUT
	document.getElementById('output').innerHTML = sum;
}