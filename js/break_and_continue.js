"use strict";


while (true) {
    var skippedNum = prompt("Please enter an odd number between 1 and 50.");
    if (skippedNum > 0 && skippedNum <= 50 && skippedNum % 2 !== 0)
        break;

    for (var i = 1; i <= 50; i++) {

        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);

        }
        if (i === skippedNum) {
            console.log("Yikes! Skipping " + skippedNum);

        } else {
            alert("Input doesn't match required criteria. Please try again.");
        }
    }
}

