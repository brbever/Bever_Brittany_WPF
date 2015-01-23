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
//established the dataOver amount

if (dataOver > 0){
	var dataCost = (dataOver * dataCostPerMbOver);
	var costTotal = (Number(dataCost) + Number(dataPackageCost));
	console.log("your bill for data will be $" + costTotal);
	}else if(dataOver <= 0){
		var costTotal = (dataPackageCost);
		console.log("your bill for data will be $" + costTotal);
		}
//calculated the amount it would cost if there were overages. also added the overage amount to the data package cost. I also made it to if the overage amount is 0 that it would just be the data package cost.

/* I plugged in the amount it costs for each mb over which was $0.01. I entered the data cap which is 2000 mb. I entered the amount used which was 3000 mb. I entered the cost of the data package which is $24.00. It then calculated that the amount of the bill is $34.00.
*/

