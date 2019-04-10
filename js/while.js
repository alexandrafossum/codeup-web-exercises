"use strict";

let x = 2;

while (x <= 65536) {
    // log the value of x
    console.log(x);
    // double the value of x
    x = x * 2; // or x *= x
}

//Ice cream


var allCones = Math.floor(Math.random() * 50) + 50;

while (allCones > 0) {

    var cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {
        console.log(cones + " sold");
    }
     else if (cones > allCones) {
        console.log("Sorry, I cannot sell you " + cones + " I only have " + allCones + ".'");
    }
     else if (cones === 0) {
        console.log("Yay! I sold them all! Bye!");
    }
     allCones -= cones;
}











