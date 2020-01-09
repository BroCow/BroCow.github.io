/* Defining Table
Write a program that helps a user choose the correct foot wear for the day’s weather. Your HTML interface should use the <select> element to limit the input options, thus validating the user input at the interface level. You must use a selection structure introduced in this lesson.

INPUT: get weather by selection of options provided via drop-down
PROCESSING: match weather selection to footwear using "if" or "either if" sequence
OUTPUT: Display matched footwear in "Display Best Footwear" button
*/

function getFootwear() {
	let weather = document.getElementById("weather-select").value;
	let footwear;
		if (weather=="hot") {
			footwear = "Sandles";
		}
	  else if (weather=="rain") {
			footwear = "Galoshes";
		}
	  else if (weather=="snow") {
			footwear = "Boots";
		}
	  else {
			footwear = "Shoes";
		}
	document.getElementById('myButton').innerHTML = footwear
}