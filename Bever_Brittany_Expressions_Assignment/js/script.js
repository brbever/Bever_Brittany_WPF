// Bever_Brittany_Expressions_Assignment

var groceryStorePoints = prompt("We will be calculating how much it will cost to buy gas using grocery store rewards points. \nPlease enter the number of points");
//collect the number of grocery store points being used.
var priceOfGas = prompt("Please enter the price of gas");
//collect the original price of gas.
var gallonsNeeded = prompt("Please enter the number of gallons of gas needed");
//collect the number of gallons of gas to be purchased.

groceryStorePoints /= 1000;
console.log(groceryStorePoints);


priceOfGas -= groceryStorePoints;
console.log(priceOfGas);

var total = gallonsNeeded * priceOfGas;
console.log(total);

