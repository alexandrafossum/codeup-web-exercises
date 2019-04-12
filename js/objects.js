(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     person["firstName"] = "alexandra",
    //     person["lastName"] = "fossum"
    // };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: "alexandra",
        lastName: "fossum",
        sayHello: function () {
            return "hello from " + person.firstName + " " + person.lastName + "!";
        }
    };

    console.log(person.sayHello());

    console.log("******************");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron',
            amount: 180},
        {name: 'Ryan',
            amount: 250},
        {name: 'George',
            amount: 320},
        {name: 'Alexandra',
            amount: 400}
    ];

    shoppers.forEach(function(shoppers, i) {
        for (i = 0; i < shoppers.length; i++);

        var total;
        var discount;

        if (shoppers.amount > 200) {
            discount = shoppers.amount * .12;
            total = shoppers.amount - discount;

            console.log(shoppers.name + "'s total is " + total);

        } else if (shoppers.amount < 200) {

            console.log(shoppers.name + " doesn't qualify for a discount.");
        }

    });

    console.log("******************");

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Bell Jar",
            author: {
                firstName: "Sylvia",
                lastName: "Plath"
            },
        },
        {
            title: "To Your Scattered Bodies Go",
            author: {
                firstName: "Philip José",
                lastName: "Farmer"
            },
        },
        {
            title: "Solaris",
            author: {
                firstName: "Stanisław",
                lastName: "Lem"
            },
        },
        {
            title: "Dead Babies",
            author: {
                firstName: "Martin",
                lastName: "Amis"
            },
        },
        {
            title: "The Yellow Wallpaper",
            author: {
                firstName: "Charlotte Perkins",
                lastName: "Gilman"
            }
        }
    ];

    // console.log(books[0].title + " by " + books[0].author.firstName + " " + books[0].author.lastName);
    // console.log(books[1].title + " by " + books[1].author.firstName + " " + books[1].author.lastName);
    // console.log(books[2].title + " by " + books[2].author.firstName + " " + books[2].author.lastName);
    // console.log(books[3].title + " by " + books[3].author.firstName + " " + books[3].author.lastName);
    // console.log(books[4].title + " by " + books[4].author.firstName + " " + books[4].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(i) {
        for (i = 0; i < books.length; i++) {
            console.log("Book # " + (i + 1));
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
            console.log("---");
        }
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {

    }


})();
