// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
'use strict';

// const profile = require('./profile.js');
const profile = require('./profile');

const topic = process.argv[2];
const users = process.argv.slice(3);
for (let user of users) {
  profile.get(user, topic);
}
