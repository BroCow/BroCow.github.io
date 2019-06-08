// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* You work for a retail store that wants to increase sales on Tuesday and Wednesday, which are the store’s slowest sales days. Write a defining table and then a program that takes a customer’s subtotal as input, and if the subtotal is greater than $50 and today is Tuesday or Wednesday, subtract 10% from the subtotal. Your program should then compute and output the total amount due by adding sales tax of 6% to the subtotal.

Input: Customer subtotal from textbox
Processing: Subtract 10% from subtotal, then add 6% sales tax to equal amount due
Output: Display total amount due after discount and sales tax applied
*/



function getTotal() {
let subtotal = parseFloat(document.getElementById('subtotal').value);
let dayOfWeek = new Date().getDay();
let total;
	
	if((subtotal > 50) && (dayOfWeek == 2 || dayOfWeek == 3)) {
		total = subtotal * 0.9 * 1.06
		 }	
	else {
		total = subtotal * 1.06;
	}
	//output
	document.getElementById("output").innerHTML= "Total amount due is $" + total.toFixed(2);
}