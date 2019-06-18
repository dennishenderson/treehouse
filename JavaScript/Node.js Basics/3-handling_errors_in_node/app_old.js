// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

'use strict';

// Require the https module
const https = require('https');
// Require http module for status codes
const http = require('http');

// Print Error Mesages
function printError(error) {
  console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) an ${points} points in JavaScript`
  console.log(message);
}

// function to pass usernames
function getProfile(username) {

  try {
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

      if (response.statusCode === 200) {
        // console.dir(response.statusCode );

        let body = '';

        // Read the data
        // data is received in multiple packets, the toString converts from Hex
        response.on('data', data =>{
          body += data.toString();
        });

        response.on('end', () => {
          try{
            // Parse the data
            const profile = JSON.parse(body);

            // Print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
          } catch (error) {
            printError(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });

    // error handeling
    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}

// console.log(process.argv);
// const users = ['chalkers', 'alenaholligan', 'davemcfarland', 'dennishenderson'];

// this will take arguments passed from command line
// example:
//   node app.js chalkers alenaholligan davemcfarland dennishenderson
const users = process.argv.slice(2);

// below is a shorthand version of the forEach loop
users.forEach(getProfile);

// the below for of loop works also, just the forEach is less code
// for (let user of users) {
//   getProfile(user);
// }

// getProfile('chalkers');
// getProfile('alenaholligan');
// getProfile('dennishenderson');

// Below is the output. You can see that JavaScript is non blocking
// Meaning that it doesn't wait for items to be prcessed in order.
// Instead who ever comes back first is what get's output
//
// dennishenderson has 47 total badge(s) an 4027 points in JavaScript
// alenaholligan has 135 total badge(s) an 205 points in JavaScript
// chalkers has 209 total badge(s) an 5985 points in JavaScript
