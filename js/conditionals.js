
"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

confirm("Would you like to enter a number?");

var number = prompt("Okay, please enter a number: ");

function evenOddNumber(number) {
    if (number % 2 === 0) {
        return number + " is even";
    } else {
        return number + " is odd";
    }
}

function add100(number) {
    return parseInt(100) + parseInt(number);
}

function positiveNegative(number) {
    if (Math.sign(number) == 1) {
        return "positive";
    } else if (Math.sign(number) == -1) {
        return "negative";
    } else {
        return "neither positive nor negative";
    }
}


alert(number + " is " + evenOddNumber(number));
alert(number + " is " + positiveNegative(number));
alert(number + " + 100 is " + add100(number));


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === "red") {
        return "Strawberries are red.";
    } else if (color === "orange") {
        return "Which came first? Orange or the orange?";
    } else if (color === "yellow") {
        return "Coldplay has ruined this color.";
    } else if (color === "green") {
        return "Green is the color of grass.";
    } else if (color === "blue") {
        return "Blue is color of the sky and sea";
    } else if (color === "indigo") {
        return "I used to think his name was Indigo Montoya.";
    } else if (color === "violet") {
        return "Three bunches of violets trod in the mud.";
    } else if (color === "cyan") {
        return "I don't know a goddamn thing about cyan";
    } else {
        return "That input is unfamiliar to me";
    }
}

console.log(analyzeColor(randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor);

console.log(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

    var colour = prompt("Enter a color: ");

    switch (colour) {
        case "red":
            console.log("The Hunt for Red October");
            break;
        case "orange":
            console.log("A Clockwork Orange");
            break;
        case "yellow":
            console.log("Yellow Submarine");
            break;
        case "green":
            console.log("The Green Mile");
            break;
        case "blue":
            console.log("Blue is the Warmest Color");
            break;
        case "indigo":
            console.log("Mood Indigo");
            break;
        case "violet":
            console.log("Violet & Daisy");
            break;
        default:
            console.log("I am not programmed to have a response to this color. Please use ROYGBIV.");
    }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

alert(analyzeColor(colour));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    switch (luckyNumber) {
        case 0:
            return total * 1;
            break;
        case 1:
            return total * .10;
            break;
        case 2:
            return total * .25;
            break;
        case 3:
            return total * .35;
            break;
        case 4:
            return total * .50;
            break;
        case 5:
            return total * 0;
            break;
        default:
            return total;
    }
}

//console.log(calculateTotal(3, 23));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 5);

var total = prompt("What is the total of your bill?");

alert("Okay, so your original total was $" + total + ". " +
    "Your lucky discount number was " + luckyNumber + ", so now your new " +
    "total is $" + (total - (calculateTotal(luckyNumber, total))) +
    ".");



