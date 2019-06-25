// console.log(3 === 4 || false || 0);

// function isAdult(age) {
//   if (age && age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isAdult(age) {
  return age && age >= 18;
}

console.log(isAdult(36));


// below is a pre ES2015 way to set default values
// Note that there's an issue with this if you set it to 0
// function countToFive(start) {
//   start = start || 1;
//   for (let i = start; i <= 5; i++) {
//     console.log(i);
//   }
// }

// with ES2015 you can just set it like below...
function countToFive(start = 1) {
  for (let i = start; i <= 5; i++) {
    console.log(i);
  }
}

countToFive(0);


function greet(name) {
  name && console.log('Hi, ' + name + '!');
}

greet('Sam');
