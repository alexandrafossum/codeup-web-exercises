"use strict";

// const numbers = [1, 2, 3, 4, 5, 6];
//
// //FILTER - get results we're looking for
// let wholeSquareRoots = numbers.filter(n => {
//     let sqrt = Math.sqrt(n);
//     return sqrt % 2 === 0;
// });
// console.log(wholeSquareRoots);
//
// //MAP - transform every element in an array
// const squares = numbers.map(n => {
//     return n * n;
// });
// console.log(squares);
//
// //REDUCE - taking an array and boiling it down to a single data type
// let people = [
//     {name: 'Lucy', age: 19, books_read: 240},
//     {name: 'George', age: 25, books_read: 213},
//     {name: 'Charlotte', age: 48, books_read: 60}
// ];
//
// const getAverageBooks = people => {
//     let totalBooks = people.reduce((accumulator, people) => {
//         return people.books_read + accumulator;
//     }, 60) //starting value required for reduce
//     return totalBooks / people.length;
// };
//
// console.log(getAverageBooks());

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODO: Use .filter to create an array of user objects where each user object has at
// least 3 languages in the languages array.


const userLanguages = users.filter((user) => {
    return user.languages.length >= 3;
});

console.log("languages");
console.log(userLanguages);

//TODO: Use .map to create an array of strings where each element is a user's
// email address

const userEmails = users.map((user) => {
    return user.email;
});

console.log("emails");
console.log(userEmails);


//TODO: Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

const userYears = users.reduce((totalExperience, user) => totalExperience + user.yearsOfExperience, 0);

console.log("years of experience");
console.log(userYears);

//TODO: Use reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length >= longest.length) {
        longest = user.email;
    }
    return longest;
}, "");

console.log("Longest email");
console.log(longestEmail);


const longestEmailTernary = users.reduce((longest, user) => user.email.length >= longest.length ? user.email : longest, "");

console.log(longestEmailTernary);

//TODO: Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.


const allInstructors = users.reduce((names, user) => {
    if (user.id === users.length) {
    return names + user.name + ".";
    } else {
    return names + user.name + ", ";
    }
}, "Your instructors are: ");

console.log("all instructors");
console.log(allInstructors);




