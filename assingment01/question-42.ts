// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name.Call show_magicians() to
// see that the list has actually been modified.

// Solution No 42:

const magicians = ["David Copperfield", "Criss Angel", "Penn & Teller"];

function makeGreat(magicians) {
   return magicians.map((magician) => `${magician} the Great`);
}

function showMagicians1(magicians) {
   for (const magician of magicians) {
      console.log(magician);
   }
}

const greatMagicians = makeGreat([...magicians]); // Copy the original array
showMagicians1(magicians); // Original array remains unchanged
showMagicians1(greatMagicians); // Modified array with "the Great" added

// ***** Result *****:

// David Copperfield
// Criss Angel;
// Penn & Teller
// David Copperfield the Great
// Criss Angel the Great;
// Penn & Teller the Great;