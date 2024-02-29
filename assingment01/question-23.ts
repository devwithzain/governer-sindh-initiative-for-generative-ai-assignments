// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the ***** Result *****s of each test.Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.");

// console.log(car == 'subaru')

// • Look closely at your ***** Result *****s, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.;

// Solution No 23:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));

console.log("Is car.includes('bar')? I predict True.");
console.log(car.includes('bar'));

// ***** Result *****:

// Is car == 'subaru' ? I predict True.
//    true
// Is car == 'toyota' ? I predict False.
//    false
// Is car != 'ford' ? I predict True.
//    true
// Is car != 'subaru' ? I predict False.
//    false
// Is car === 'subaru' ? I predict True.
//    true
// Is car === 'Subaru' ? I predict False.
//    false
// Is car !== 'ford' ? I predict True.
//    true
// Is car !== 'subaru' ? I predict False.
//    false
// Is car.startsWith('su') ? I predict True.
//    true
// Is car.includes('bar') ? I predict True.
//    true;