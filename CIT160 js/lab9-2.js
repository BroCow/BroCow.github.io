/*Write a defining table and a JavaScript program that outputs an the oldest, running temple of The Church from a limited list provided in an HTML data table that is provided as shown in the image.

Your program must use a looping structure to process each data row of the table. The HTML for the table and for table's style is provided.

INPUT: 
PROCESSING: 
OUTPUT: Display the oldest, running temple of The Church
*/
//Input

let table = document.getElementById('templeData');
let yr1 = parseInt(table.rows[1].cells[1].innerHTML);

//Processing

for (let i = 2; i < 7; i++) {
		if (parseInt(table.rows[i].cells[1].innerHTML) < yr1) {
			yr1 = parseInt(table.rows[i].cells[1].innerHTML);
			let oldTemple = (table.rows[i].cells[0].innerHTML);
			
			document.getElementById("output").innerHTML = oldTemple
		}		
	}
