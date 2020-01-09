/* 
Write a defining table and then a program that determines if you can sleep in or not. Your program should get all its input from your computer’s clock. On all weekdays (Monday through Friday) that are not holidays, your program should output “Get up!” On all other days (weekends and holidays), your program should output “Sleep in.” The three holidays that your program must check for are January 1 (New Year’s Day), July 4 (U.S. Independence Day), and December 25 (Christmas). You don’t need to include other holidays in your program because most other holidays do not occur on a fixed day each year.

Remember how to get the day and month from the date object to complete this assignment. Remember to use the developer forum.

Input: get date from computer clock
Processing: Evaluate date and produce appropriate message
Output: Display Get up! on weekdays that are not holidays and "Sleep in!" on weekends and holidays
*/

//Input
let today = new Date(); // new Date object
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();


document.getElementById('todaysDate').innerHTML = today;

//Processing	
	if ((month == 0 && day == 1) || (month == 6 && day == 4) || (month == 11 && day == 25) || day == 6 || day ==0) {
		alarm = "Sleep In!";
	} 	
	  else {
		alarm = "Get Up!";
	}
	//output
	document.getElementById("alarmMessage").innerHTML= alarm;