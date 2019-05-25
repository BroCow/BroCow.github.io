/* Defining Table
Write a defining table and a JavaScript program to compute and output an employee’s after tax pay. Your program will read the number of regular hours that an employee worked and that employee’s wage, and then compute that employee’s after tax pay. Tax is 15% of the employee’s gross pay. Your program should correctly handle real numbers.

INPUT: get number of regular hours (hours) and the wage (wage) 
PROCESSING: compute the after tax pay (net) using net=hours*wage - tax
OUTPUT: Display employee after tax pay
*/

function getAfterTaxPay() {
	//INPUT
	let hours = parseFloat(document.getElementById('hours').value);
	let wage = parseFloat(document.getElementById('wage').value);
	let tax = hours * wage * 0.15;
	//Processing
	let net = hours * wage - tax;
	//OUTPUT
	document.getElementById('output').innerHTML = "Employee after-tax pay is $" + net;
}