// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False ***** Result ***** for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array;

// Solution No 24:

// Tests for equality and inequality with strings
let city = 'New York';

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');

console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');

// Tests using the lower case function
let fruit = 'Apple';

console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');

console.log("Is fruit.toLowerCase() == 'banana'? I predict False.");
console.log(fruit.toLowerCase() == 'banana');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x = 10;
let y = 5;

console.log("Is x > y? I predict True.");
console.log(x > y);

console.log("Is x < y? I predict False.");
console.log(x < y);

// Tests using "and" and "or" operators
let z = 15;

console.log("Is x > y and y < z? I predict True.");
console.log(x > y && y < z);

console.log("Is x < y or y < z? I predict True.");
console.log(x < y || y < z);

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in numbers? I predict True.");
console.log(!numbers.includes(6));

// ***** Result *****:

// Is city == 'New York' ? I predict True.
//    true
// Is city == 'Los Angeles' ? I predict False.
//    false
// Is fruit.toLowerCase() == 'apple' ? I predict True.
//    true
// Is fruit.toLowerCase() == 'banana' ? I predict False.
//    false
// Is x > y ? I predict True.
//    true
// Is x < y ? I predict False.
//    false
// Is x > y and y < z ? I predict True.
//    true
// Is x < y or y < z ? I predict True.
//    true
// Is 3 in numbers ? I predict True.
//    true
// Is 6 not in numbers ? I predict True.
//    true;