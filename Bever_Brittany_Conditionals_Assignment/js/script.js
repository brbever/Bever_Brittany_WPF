// Bever_Brittany_Conditionals_Assignment 22JAN2015

var dataCostPerMbOver = prompt("We will be calculating how much it will cost if you go over your data allowance. \nPlease enter how much it cost for each Megabyte over your limit");
(dataCostPerMbOver == "" || dataCostPerMbOver == "null") ? prompt("You forgot to input something! Please enter how much it cost for each Megabyte over your limit.") : console.log(dataCostPerMbOver);
//collect how many mb have been used. verify there was an entry.

var dataCap = prompt("Please enter your data cap");
(dataCap == "" || dataCap == "null") ? prompt("You forgot to input something! Please enter your data cap") : console.log(dataCap);
//collect the data cap and verify there was an entry.

var dataUsage = prompt("Please enter the amount of data used");
(dataUsage == "" || dataUsage == "null") ? prompt("You forgot to input something! Please enter the amount of data used.") : console.log(dataUsage);
//collect the amount of data used and verify there was an entry.

var dataPackageCost = prompt("Please enter the price of your data package");
(dataPackageCost == "" || dataPackageCost == "null") ? prompt("You forgot to input something! Please enter the price of your data package.") : console.log(dataPackageCost);
//collect the cost of the data package without overages and verify there was an entry.

var dataOver = (dataUsage - dataCap);

if (dataOver > 0){
	var dataCost = (dataOver * dataCostPerMbOver);
	var costTotal = (dataCost + dataPackageCost);
	console.log(costTotal)
	}else{
		var costTotal = (dataPackageCost);
		console.log(costTotal)
		}
		
