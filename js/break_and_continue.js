"use strict";

var input;

 while (true) {
     input = prompt("Please enter an odd number between 1 and 50.");

     // if (isNaN(input)) {
     //     alert("That is not a number. Please try again.");
     //     continue;
     // }
     if (input % 2 === 0) {
         alert("That is not an odd number and we SPECIFICALLY asked you for an odd number.");
         continue;
     }
     if (input < 1 || input > 50) {
         alert("Once again, we gave you SPECIFIC instructions and you ignored them. PLEASE pick a number between ONE and FIFTY.");
         continue;
     } else {
         break;
     }
 }

console.log(input);
 for (var i = 1; i <= 50; i++) {
     if (i % 2 !== 0) {
         continue;
     }

     if (i === input) {
         console.log("Yikes! Skipping number: " + i + "!");
         continue;
     } else {
         console.log("Here is an odd number: " + i);
     }
 }
