'use strict';

let teachers = [
    { name: 'Ken', comments: 'Amazing', rating: 4 },
    { name: 'James', comments: 'Astounding', rating: 3 },
    { name: 'Dave', comments: 'Astonishing', rating: 3 },
    { name: 'John', comments: 'Accelerating', rating: 2 },
    { name: 'Andrew', comments: 'Arm-chair-ing', rating: 3 },
    { name: 'Elizabeth', comments: 'Accepting', rating: 5 },
    { name: 'Nick', comments: 'Automating', rating: 6 },
    { name: 'Sarah', comments: 'Amplifying', rating: 7 },
    { name: 'Alena', comments: 'Appending', rating: 8 }
];

// ES5 gave us forEach loops...
console.log('...forEach begin...');
teachers.forEach(teacher => {
  console.log(teacher.name);
  if (teacher.name === 'Nick') {
    console.log(teacher.rating);
  }
})
console.log('...forEach end...');

// ES6 gave us for of and for in loops.
// for of loops can't be used on objects but for in can.
console.log('...for of begin...');
for (let teacher of teachers) {
  console.log(teacher.name);
  if (teacher.name === 'Nick') {
    console.log(teacher.rating);
    break;
  }
}
console.log('...for of end...');
