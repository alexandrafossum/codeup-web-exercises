"use strict";

// Multiplication table

function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x " + number + " = " + (number * i));
    }
}

showMultiplicationTable(9);

// Walk-through multiplication table

function outputRow(num1, num2) {
    var output = "";
    var total = num1 * num2;
    output += num1 + " x " + num2 + " = " + total;
    return output;
}

function multiplicationTable(num) {

    var output = "";

    for (var i = 1; i <= 10; i += 1) {
        output += outputRow(num, i) + "\n";
    }
    return output;
}

multiplicationTable(7);


//Odd number prompt

//Walk-through version

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isEvenOdd(number) {
    var outputMessage = number;
    outputMessage += (number % 2 === 0) ? " is even" : " is odd"; //ternary syntax
    console.log(outputMessage);
}

function evenOddCalc() {
    for (var i = 1; i <= 10; i++) {
    var randNum = generateRandomNumber(20, 200);
    var result = isEvenOdd(randNum);
    }
    return result;
}

evenOddCalc();

//My version

for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}

for (let i = 1; i < 10; i++) {
    console.log(i)
}



// Number triangle

    for (var a = 1; a <= 9; a++) {
        console.log(String(a).repeat(a));
    }

// Number triangle as a nested for-loop

for (var i = 1; i < 10; i++) {
    var output = ""; // set to string for default value type, rather than risk "undefined"
    for (var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

// Decrement from 100 by 5

for (let x = 100; x >= 5; x -= 5) {
    console.log(x);
}