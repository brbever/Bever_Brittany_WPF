//Bever_Brittany_Functions_Assignment

var diapersPerBox = prompt("Please enter the number of diapers in the box");//define and prompt for the variable.
while (diapersPerBox == "") {
	diapersPerBox = prompt("Oops! you forgot to enter the number of diapers in the box");//Use the while loop to make sure there is input for the variable.
} 

var diapersPerDay = prompt("Please enter the number of diapers used per day");//define and prompt for the variable.
while (diapersPerDay == "") {
	diapersPerDay = prompt("Oops! you forgot to enter the number of diapers used per day");//Use the while loop to make sure there is input for the variable.
}

var boxPrice = prompt("Please enter the price of the box of diapers");//define and prompt for the variable.
while (boxPrice == "") {
	boxPrice = prompt("Oops! you forgot to enter the price of the box of diapers");//Use the while loop to make sure there is input for the variable.
}
//define the fuction for calculating price of diapers per day.
var calcDayPrice = function(b, d, p) {
	daysPerBox = b / d;
	pricePerDay = p / daysPerBox;
	return pricePerDay.toFixed(2);
}//calculate the price per day by dividing diapers per box by diapers per day, then dividing the price of a box by the number of days per box.

var dayPrice = calcDayPrice(diapersPerBox, diapersPerDay, boxPrice);//define the variable for the day price. define the arguements

console.log("The price of diapers per day is $" + dayPrice);//log the price of diapers per day

var monthTotals = monthCalc(dayPrice);//define the variable of month totals

function monthCalc(d){
	monthPrice = d * 30;
	return monthPrice.toFixed(2);
}//calculate the month price by multiplying the day price by 30

console.log("The price for diapers per month is $" + monthTotals);//log the month price

var yearTotals = yearCalc(monthTotals);//define the variable of year totals

function yearCalc(m){
	yearPrice = m * 12;
	return yearPrice.toFixed(2);
}//calculate the month price by multiplying the month totals by 12.
console.log("The price for diapers per year is $" + yearTotals);//log the year price
