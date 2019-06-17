'use strict';

// This is one way to set default values prior to ES2015...
// function greet(name, timeOfDay) {
//   name = name || 'Dennis';
//   timeOfDay = timeOfDay || 'Day';
//   console.log(`Good ${timeOfDay}, ${name}!`);
// }


// In ES2015 there's a shorter way to write Default values...
function greet(name = 'Dennis', timeOfDay = 'Day') {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

// this uses both default parameters
greet(); // Good Day, Dennis!

// this uses the first default paramater by selecting undefined
// then passes the second parameter 'Afternoon'
greet(undefined, 'Afternoon'); // Good Afternoon, Dennis!

// optionally you can leave the latter parameters out and they will use defaults
greet('Dave'); // Good Day, Dave!
