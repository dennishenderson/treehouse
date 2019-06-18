'use strict';

// Require the https module
const https = require('https');
// Require http module for status codes
const http = require('http');
// Require custom print module
const print = require('./print');

// function to pass usernames
function get(username, topic) {
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
            print.printMessage(username, profile.badges.length, profile.points[topic]);
          } catch (error) {
            print.printError(error);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
        const statusCodeError = new Error(message);
        print.printError(statusCodeError);
      }
    });

    // error handeling
    request.on('error', print.printError);
  } catch (error) {
    print.printError(error);
  }
}

module.exports.get = get;
