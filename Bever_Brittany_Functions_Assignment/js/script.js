//Bever_Brittany_Functions_Assignment

var diapersPerBox = prompt("Please enter the number of diapers in the box");
while (diapersPerBox == "") {
	diapersPerBox = prompt("Oops! you forgot to enter the number of diapers in the box");
}

var diapersPerDay = prompt("Please enter the number of diapers used per day");
while (diapersPerDay == "") {
	diapersPerDay = prompt("Oops! you forgot to enter the number of diapers used per day");
}

var boxPrice = prompt("Please enter the price of the box of diapers");
while (boxPrice == "") {
	boxPrice = prompt("Oops! you forgot to enter the price of the box of diapers");
}

var calcDayPrice = function(b, d, p) {
	daysPerBox = b / d;
	pricePerDay = daysPerBox / p;
	return pricePerDay.toFixed(2);
}

var dayPrice = calcDayPrice(diapersPerBox, diapersPerDay, boxPrice);

console.log("The price of diapers per day is $" + dayPrice);

var monthTotals = priceCalc(dayPrice);

function priceCalc(d){
	monthPrice = d * 30;
	return monthPrice;
}

console.log("The price for diapers per month is $" + monthPrice);

var yearTotals = priceCalc(dayPrice);

function priceCalc(d){
	yearPrice = yearPrice * 12;
	return yearPrice;
}
console.log("The price for diapers per year is $" + yearPrice);
