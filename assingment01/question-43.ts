// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the;
// function make_great() with a copy of the array of magicians’ names.Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// Solution No 43:

const magicians = ["David Copperfield", "Criss Angel", "Penn & Teller"];

function makeGreat(magicians) {
   return magicians.map((magician) => `${magician} the Great`);
}

function showMagicians(magicians) {
   for (const magician of magicians) {
      console.log(magician);
   }
}

const greatMagicians1 = makeGreat(magicians.slice()); // Create
console.log(greatMagicians1);

// ***** Result *****:

// [
//    'David Copperfield the Great',
//    'Criss Angel the Great',
//    'Penn & Teller the Great'
// ];