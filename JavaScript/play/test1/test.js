var fs = require("fs");

fs.readFile('./app.js', function (err, data) {
  if (err) throw err;
  console.log("File read.");
});

console.log("I love bees.");
