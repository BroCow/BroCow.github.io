// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

 /*Defining Table
* Input: Get temperature and wind speed from user.
* Processing: Calculate wind chill
* Output: Return Windchill factor to user. 
*/

function doInputOutput() {
    let temp= parseInt(document.getElementById('temp').value);
		let wind= parseInt(document.getElementById('wind').value);
	
if (temp > 50 || wind < 3) {
	let output1 = "N/A";
	document.getElementById("output").innerHTML = output1;
}
	else {
		let output2 = windChill(temp, wind);
		document.getElementById("output").innerHTML= output2;
	}
}

function windChill(temp, wind) {
  let wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * (temp * Math.pow(wind, 0.16)));
  return Math.round(wc);
      }
      