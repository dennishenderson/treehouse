const weather = require('./weather');

const query = process.argv.slice(2).join(' ');

//query: 90201
//query: Los Angeles

weather.get(query);

// Temperature is available in Fahrenheit, Celsius and Kelvin units
// For temperature in Fahrenheit use units=imperial
// For temperature in Celsius use units=metric
// Temperature in Kelvin is used by default, no need to use units parameter in API call
