(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // var names = [];
    // names[0] = "Lucy Honeychurch";
    // names[1] = "George Emerson";
    // names[2] = "Charlotte Bartlett";
    // names[3] = "Reverend Mr. Beebe";

    var names = ["Lucy Honeychurch", "George Emerson", "Charlotte Bartlett", "Reverend Mr. Beebe"];
    console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    //backwards

    for (var x = names.length - 1; x >= 0; x--) {
        console.log(names[x]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
    *    someArray.forEach(function(element, index, array)
    *    shorter than a regular for loop, but a regular for loop can skip some elements
    */

    names.forEach(function(name) {
        console.log(name);
        console.log("******************")
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function first (names) {
        return names[0];
    }

    function second (names) {
        return names[1];
    }

    function third (names) {
        return names[2];
    }

    console.log("Functions first, second, and third:");
    console.log(first(names));
    console.log(second(names));
    console.log(third(names));

})();

/**
 * BONUS MATERIAL
 * */


