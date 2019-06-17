'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

// this creates two new varables item1 and item2 and sets them to the values
// inside the toybox item1 and item2 respectively
let {item1, item2} = toybox;
console.log(item1); // car
console.log(toybox.item1); // car
console.log(item1, item2); // car, ball
console.log(toybox.item1, toybox.item2); // car, ball


// this creates a new variable named disc for the value inside item3
// note: this does not change the name inside the object
let {item3: disc} = toybox;
console.log(disc); // frisbee
console.log(toybox.item3); // frisbee
