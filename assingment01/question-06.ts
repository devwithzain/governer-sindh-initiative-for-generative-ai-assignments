// Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Solution No 06:

const names = "\t\t Muhammad Zain \n";
const strippedName = names.trim();

console.log(`Original name: ${names}`);
console.log(`Stripped name: ${strippedName}`);

// ***** Result *****

// Original name:           Muhammad Zain
// Stripped name: Muhammad Zain;