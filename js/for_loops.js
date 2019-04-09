"use strict";

//Multiplication table

function showMultiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " x " + input + " = " + (input * i));
    }
}

showMultiplicationTable(7);

//Odd number prompt

for (let i = 1; i < 11; i++) {
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

//Number triangle

for (let i = 1; i < 10; i++) {
    for (let j = 1; j.length < 10; j++) {
        console.log(i + j);
    }
}

//Decrement from 100 by 5

for (let x = 100; x >= 5; x -= 5) {
    console.log(x);
}