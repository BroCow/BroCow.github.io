/* Defining Table
Compute the volume of a cylinder in liters. Ask for the appropriate inputs and output the total volume to the screen. Your program should correctly handle real numbers (numbers with decimals).

INPUT: get height of the cylinder (h) and the radius (r) 
PROCESSING: compute the volume of a cylinder using V=πr2h
OUTPUT: Display volume in cubic units
*/

function getCylinderVolume() {
	//INPUT
	let r = parseFloat(document.getElementById('r').value);
	let h = parseFloat(document.getElementById('h').value);
	//Processing
	let volume = Math.PI * Math.pow(r, 2) * h;
	let liters = volume / 61.024;
	//OUTPUT
	document.getElementById('output').innerHTML = "The volume of the cylinder is " + liters.toFixed(2) + " liters";
}