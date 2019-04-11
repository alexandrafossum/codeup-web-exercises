(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    var planetsBreakTag = planetsArray.join('<br>');
    console.log(planetsBreakTag);

    var planetsStringList = planetsArray.join('</li><li>');
    var planetsUnorderedList = "<ul><li>" + planetsStringList + "</ul";

    console.log(planetsUnorderedList);


    /**
     * BONUS
     * */

    var newStringJoin = planetsArray.join(', ');
    console.log(newStringJoin);

    // Create a function that returns a random day of the week

    function generateDay() {
        var daysOfTheWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var randomDay = daysOfTheWeekArray[Math.floor(Math.random() * daysOfTheWeekArray.length)];
        return "The day is: " + randomDay;
    }

    console.log(generateDay());


    //Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letterPrompt = prompt("Enter a letter in the English alphabet.");

    function indexOfLetter(i) {
        for (i = 0; i < alphabet.length; i++) {
            return alphabet.indexOf(letterPrompt.toLowerCase()) + 1;
        }
    }

    console.log(alert(indexOfLetter()));


    /** Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
        1) add a student
        2) delete a student
        3) view all students in alphabetical order
        4) view all students in reverse alphabetical
    **/

    var studentArray = ["Lester", "Joe", "Pierre", "John", "Brian", "Kim", "Jean", "Paul", "Stephen", "Justin"];


    // var studentArray = ["Lester", "Joe", "Pierre", "John", "Brian", "Kim", "Jean", "Paul", "Stephen", "Justin"];
    //
    // var addStudent = prompt("Enter the name of the student you would like to enroll: ");
    //
    // var removeStudent = prompt("Please enter the name of the student you wish to remove: ");
    //
    // function addAStudent() {
    //     if (isNaN(addStudent)) {
    //         return studentArray.push.toUpperCase(addStudent);
    //     } else {
    //         return alert("Sorry, we didn't recognise " + addStudent + " as a valid name.");
    //     }
    // }
    //
    // function removeAStudent() {
    //     if (removeStudent === studentArray[0] || studentArray[1] || studentArray[2] || studentArray[3] || studentArray[4] || studentArray[5] || studentArray[6] || studentArray[7] || studentArray[8] || studentArray[9] || studentArray[10]) {
    //         return studentArray.remove(removeStudent);
    //     } else {
    //         alert("Sorry, we have not records of " + removeStudent + " being enrolled here.");
    //     }
    // }
    //
    // function alphabetiseStudents() {
    //     return studentArray.sort();
    // }
    //
    // console.log(alphabetiseStudents());
    //
    // function reverseAlphabetise() {
    //     return studentArray.reverse().sort();
    // }
    //
    // function allTogetherNow() {
    //     if (addStudent === true) {
    //         return confirm ("Adding " + addAStudent());
    //     } else if (removeStudent === true) {
    //         return confirm ("Removing " + removeAStudent());
    //     } else {
    //         return alert("We don't understand you.");
    //     }
    // }
    //
    // console.log(allTogetherNow());





})();
