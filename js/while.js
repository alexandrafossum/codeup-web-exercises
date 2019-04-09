"use strict";

let x = 2;

while (x >= 2) {
    console.log(x * 2);
    x + 2;
}


while (allCones <= 100) {
    let allCones = Math.floor(Math.random() * 50) + 50;
    let cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {
        console.log(cones + " sold");
    }
    if (cones > allCones) {
        console.log("Sorry, I cannot sell you " + cones + " I only have " + allCones + ".'");
    }
    if (cones === 0) {
        console.log("Yay! I sold them all! Bye!");
    }
}








