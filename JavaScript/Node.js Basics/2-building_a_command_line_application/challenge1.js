const https = require('https');
https.get('https://teamtreehouse.com/chalkers.json', response => {
  console.log(response.statusCode);
});
