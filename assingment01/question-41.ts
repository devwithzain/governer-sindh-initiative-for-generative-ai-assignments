// 41. Magicians: Make a array of magician’s names.Pass the array to a function
//    called show_magicians(), which prints the name of each magician in the array.

// Solution No 41:

const magicians = ["David Copperfield", "Criss Angel", "Penn & Teller"];

function showMagicians(magicians) {
   for (const magician of magicians) {
      console.log(magician);
   }
}

showMagicians(magicians);

// ***** Result *****:

// David Copperfield
// Criss Angel;
// Penn & Teller;