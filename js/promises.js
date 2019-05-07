"use strict";

//LECTURE EXAMPLES

// let goodKid = true;
//
// const getPie = new Promise((resolve, reject) => {
//     if (goodKid) {
//         resolve("You get pie!");
//     } else {
//         reject("No pie for you!");
//     }
// });
//
// // getPie();
//
// getPie.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// Fetch API

// let number = Math.floor(Math.random() * 90);
//
// fetch('https://swapi.co/api/people/' + number)
//     .then((response) => {
//         return response.json(); //convert to JSON to read data
//     }).then(data => {
//             console.log(data);
//     }).catch((err) => {
//         console.log("Error", err);
// });

// promise.all([promise1, promise2, promise3]);


//TODO: Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

// const wait = num => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     });
// };

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(10000).then(() => alert('Your mum'));

//TODO: Create a function that accepts a github username, and returns a promise that
// resolves with the date of the last commit that user made

// const promisesKey = promisesGithubKey;
const userName = 'alexandrafossum';

fetch('https://api.github.com/users/' + userName + '/events', {headers: {'Authorization': 'promisesGithubKey'}})
    .then(response => {
        console.log(response);
        return response.json();
        // console.log(response.json());
    })
    .then(jsonObject => {
        console.log(jsonObject);
        console.log("Last updated: " + jsonObject[2].created_at);
        return new Date(jsonObject[2].created_at).toDateString();
    });


//WALK-THROUGH VERSION




