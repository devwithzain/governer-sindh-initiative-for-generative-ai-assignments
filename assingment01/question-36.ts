// 36. T - Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt.The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// Solution No 36:

function makeShirt(size = "large", message = "I love TypeScript") {
   console.log(`This is a ${size} shirt with the message: ${message}`);
}

makeShirt(); // Large shirt with default message
makeShirt("medium"); // Medium shirt with default message
makeShirt("small", "Python is also great!"); // Small shirt with custom message

// ***** Result *****:

// This is a large shirt with the message: I love TypeScript
// This is a medium shirt with the message: I love TypeScript
// This is a small shirt with the message: Python is also great!;