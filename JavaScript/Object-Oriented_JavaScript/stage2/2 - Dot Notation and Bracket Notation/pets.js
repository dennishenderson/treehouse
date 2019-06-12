const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// // Example of Dot Notation
// console.log(ernie.age);
// console.log(ernie.breed);
//
// ernie.bark();
//
// // Example of Bracket Notation
// console.log(ernie['age']);
// console.log(ernie['breed']);
//
// ernie['bark']();
//
// // Example of Bracket Notation from a variable
// let prop = 'breed';
// console.log(ernie[prop]);

// Example of setting values
ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';
console.log(ernie);
