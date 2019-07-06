// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
	today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Write two functions with these headers:

function doFV()
function computeFutureValue(principal, annualRate, years, periodsPerYear)

The first function (doFV)
1. takes no parameters
2. is called from the onclick attribute
3. gets input from the user
4. calls the computeFutureValue function
5. displays the result to the user

The second function (computeFutureValue) computes and returns the future value of an investment. 
The formula for computing the future value of an investment is:
  f = a (1 + r)n
where f is the future value, a is the investment amount sometimes called the principal, r is the growth rate per period, and n is the total number of periods throughout the life of the investment.
*/

//creates function to activate program upon button selection
function doFV() {
//creates variable to store value returned by computeFutureValue formula
	let futureValue = computeFutureValue(principal, annualRate, years, periodsPerYear);
//displays value to user	
	document.getElementById('output').innerHTML = futureValue;
}

//creates function to calculate values input by user
function computeFutureValue(principal, annualRate, years, periodsPerYear) {
//creates variables to be used for formula that store data input by user
	let a = parseFloat(document.getElementById('principal').value);
	
	let ar = parseFloat(document.getElementById('annualRate').value);
	
	let y = parseFloat(document.getElementById('years').value);
	
	let py = parseFloat(document.getElementById('periodsPerYear').value);
	
	let r = parseFloat(document.getElementById('annualRate').value) / parseInt(document.getElementById('periodsPerYear').value);
	
	let n = parseFloat(document.getElementById('years').value) * parseInt(document.getElementById('periodsPerYear').value);
	
//Formula to use f = a (1 + r)n
	let f = (a * (1 + r) * (y * py));
	return f;
}
