// Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Solution No 03:

let personName3 = "Neha Siddiqui";
console.log(
   `Person name in lowercase ${personName3.toLowerCase()}. 
   Person name in uppercase ${personName3.toUpperCase()}.
   Person name in titlecase ${personName3.replace(/(?:^|\s)\w/g, match => match.toUpperCase())}`
);

// ***** Result *****:

// Person name in lowercase neha siddiqui.
// Person name in uppercase NEHA SIDDIQUI.
// Person name in titlecase Neha Siddiqui;