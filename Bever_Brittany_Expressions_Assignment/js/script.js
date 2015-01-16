// Bever_Brittany_Expressions_Assignment

var groceryStorePoints = prompt("We will be calculating how much it will cost to buy gas using grocery store rewards points. \nPlease enter the number of points");
//collect the number of grocery store points being used.
var priceOfGas = prompt("Please enter the price of gas");
//collect the original price of gas.
var gallonsNeeded = prompt("Please enter the number of gallons of gas needed");
//collect the number of gallons of gas to be purchased.


groceryStorePoints /= 1000;
console.log(groceryStorePoints);
//grocery store points were divided by 1000 to figure out how many cents off per gallon are being used. print variable to log.

priceOfGas -= groceryStorePoints;
console.log(priceOfGas);
//subtract the grocery store points from the price of gas to get what the price of gas would be after the grocery store points were taken out. print variable to log.

//Create and array of totals
var totals = [gallonsNeeded, priceOfGas];

var total = totals[0] * totals[1];
console.log(total);
//multiply the gallons of gas needed by the price of gas with the grocery store points to get the total price. print variable to log.

alert("The total price for gas will be $" + total.toFixed(2));
//added the alert to give the total price of gas and force JavaScript to round to the nearest hundredth.

/* Input grocery store points as 1000, 
Input price of gas as $1.85,
Input number of gallons needed as 16.4 
and my calculator gave me a total of $13.94. */


