'use strict';

// rest parameters must be used as the last parameter
function myFunction(name, ...params) {
  console.log(name, params);
}

myFunction('Dennis', 1, 2, 3, 'Dave'); // Dennis [1, 2, 3, 'Dave']


// if you only have 1 parameter ad it's a rest parameter, all inputs get
// placed into an array
function myFunction2(...params) {
  console.log(params);
}

myFunction2('Dennis', 1, 2, 3, 'Dave'); // ['Dennis', 1, 2, 3, 'Dave']
