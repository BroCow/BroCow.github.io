
/* Defining Table
INPUT:  Get first name from input label firstName
PROCESSING:  Add first name to text from scripture
OUTPUT:  Display personalized scripture on the document
*/

function addNumbers() {
	//INPUT
	let x = (document.getElementById('firstName').value);
	
	//Processing
	
	//OUTPUT
	document.getElementById('output').innerHTML = "Now king Mosiah had given " + x + " the authority over the church ";
}