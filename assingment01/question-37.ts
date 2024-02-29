// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript.Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different;
// message.

// Solution No 37:

function makeShirt1(size = "large", message = "I love TypeScript") {
   console.log(`This is a ${size} shirt with the message: ${message}`);
}

makeShirt1(); // Large shirt with default message
makeShirt1("medium"); // Medium shirt with default message
makeShirt1("small", "JavaScript is awesome!"); // Small shirt with custom message

// ***** Result *****;

// This is a large shirt with the message: I love TypeScript
// This is a medium shirt with the message: I love TypeScript
// This is a small shirt with the message: JavaScript is awesome!;