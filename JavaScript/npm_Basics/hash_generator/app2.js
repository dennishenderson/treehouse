const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlainTextPassword = 'password';
const someOtherPlaintextPassword = 'not_bacon';

// let myPlainTextPasswordHash = '';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlainTextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         myPlainTextPasswordHash = hash;
//         console.log(`Hash for password '${myPlainTextPassword}' - '${myPlainTextPasswordHash}'`);
//     });
// });

// async function checkPassword(password, hash) {
//     //... fetch user from a db etc.
//
//     let result = '';
//
//     const match = await bcrypt.compare(password, hash);
//
//     if(match) {
//       result = `The password '${password}' successfully matched the hash '${hash}'`;
//     } else {
//       result = `The password '${password}' failed to match the hash '${hash}'`;
//     }
//
//     return result;
// }

// console.log(checkPassword(myPlainTextPassword, myPlainTextPasswordHash));
// console.log(checkPassword(myPlainTextPassword, someOtherPlaintextPassword));

let myPlainTextPasswordHash = bcrypt.hashSync(myPlainTextPassword, saltRounds);
console.log(`Hash for password '${myPlainTextPassword}' - '${myPlainTextPasswordHash}'`);

// Load hash from your password DB.
console.log(bcrypt.compareSync(myPlainTextPassword, myPlainTextPasswordHash)); // true
console.log(bcrypt.compareSync(someOtherPlaintextPassword, myPlainTextPasswordHash)); // false
