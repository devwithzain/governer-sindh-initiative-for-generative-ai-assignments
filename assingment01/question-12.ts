// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.;

// Solution No 12:

const friednsNames = ["Rehan", "Saad", "Ebad", "Hammad", "Hamza", "Faizan"];

friednsNames.map((elem) => {
   return console.log(`Good Morning, ${elem}`);
});

// ***** Result *****

// Good Morning, Rehan
// Good Morning, Saad
// Good Morning, Ebad
// Good Morning, Hammad
// Good Morning, Hamza
// Good Morning, Faizan;