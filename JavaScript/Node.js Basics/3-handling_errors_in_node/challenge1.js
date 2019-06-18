const https = require("https");

const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});
request.on('error', error => console.error(error.message));
