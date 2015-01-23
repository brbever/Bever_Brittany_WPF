// Bever_Brittany_Conditionals_Assignment 22JAN2015

var dataCostPerMbOver = prompt("We will be calculating how much it will cost if you go over your data allowance. \nPlease enter how many Megabytes have been used");
(dataCostPerMbOver = "") ? promt("You forgot to input something! Please enter how many Megabytes have been used.") : console.log(dataCostPerMbOver);
//collect how many mb have been used. verify there was an entry.

var dataCap = prompt("Please enter your data cap");
(dataCap = "") ? promt("You forgot to input something! Please enter your data cap") : console.log(dataCap);
//collect the data cap and verify there was an entry.

var dataUsage = prompt("Please enter the amount of data used");
(dataUsage = "") ? promt("You forgot to input something! Please enter the amount of data used.") : console.log(dataUsage);
//collect the amount of data used and verify there was an entry.

var dataPackageCost = prompt("Please enter the price of your data package");
(dataPackageCost = "") ? promt("You forgot to input something! Please enter the price of your data package.") : console.log(dataPackageCost);
//collect the cost of the data package without overages and verify there was an entry.
