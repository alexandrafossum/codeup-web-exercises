"use strict";

alert("Welcome to my website!");

var favColor = prompt("What is your favourite colour?");

alert("Great, " + favColor + " is my favourite colour too!");

//Movie rentals

var littleMermaid = prompt("How many days did you rent The Little Mermaid?");
var brotherBear = prompt("How many days did you rent Brother Bear?");
var hercules = prompt("How many days did you rent Hercules?");

var ppd = prompt("What was the daily rate?");

var totalCost = (+littleMermaid + +brotherBear + +hercules) * ppd;

alert("Your movie rental total is: $" + totalCost + ".");

//Contract work

var pphGoogle = prompt("How much does Google pay?");
var pphAmazon = prompt("How much does Amazon pay?");
var pphFacebook = prompt("How much does Facebook pay?");

var hoursGoogle = prompt("How many hours this week at Google?");
var hoursAmazon = prompt("How many hours this week at Amazon?");
var hoursFacebook = prompt("How many hours this week at Facebook?");

var totalPay = (pphGoogle * hoursGoogle) + (pphAmazon * hoursAmazon) +
    (pphFacebook * hoursFacebook);

var yearPay = (totalPay * 52);

var decadePay = (yearPay * 10);

var disgustinglyRich = (decadePay * 3);

alert("You made $" + totalPay + " this week at companies that are so powerful we're afraid to look too close. At this " +
    "rate you could make $" + yearPay + " in a year! That means in 10 years you will have made $" + decadePay + " and " +
    "through a wiley accountant you can avoid paying taxes on your " + "fair share, thus stockpiling fistfuls of cash " +
    "while city streets erode and " + "your neighbour's grandparents lose their benefits, children in " + "poverty starve, " +
    "and the national debt ticks ever upward. In a way, you've become what you most feared, " + "and it will only be " +
    "compounded as you " + "maintain this pace for two more decades. Now you have $" + disgustinglyRich + "! Way to go, " +
    "slugger!!!!!!!");

//Student enrollment

var classCapacity = confirm("Is this class full? If not, select CANCEL.");
var studentSchedule = confirm("Does the class conflict with student's schedule? If not, select CANCEL.");

var enrolled = !classCapacity && !studentSchedule;

alert("Your enrollment status: " + enrolled);

//Product offer

var numOfItems = prompt("Enter number of items you're purchasing: ");
var specialOfferValid = prompt("Is your offer code valid?");
var premiumMember = prompt("Are you a premium member?");

var offerApplied = (premiumMember = true || Number(numOfItems) > 2) && specialOfferValid;

alert("Discount status: " + offerApplied);





