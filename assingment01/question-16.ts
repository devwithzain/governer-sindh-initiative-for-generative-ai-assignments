// 16. More Guests: You just found a bigger dinner table, so now more space is;
// available.Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// Solution No 16:

const guestList = ["Khursheed", "Ahsan", "Faizan"];

function inviteToDinners(guest) {
   console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

guestList.forEach(inviteToDinners);

console.log("I found a bigger dinner table! More guests are invited:");

// Add new guests
guestList.unshift("Faisal Azad"); // Add to the beginning
guestList.splice(1, 0, "Mahnoor"); // Add to the middle
guestList.push("Juniad Akram"); // Add to the end

guestList.forEach(inviteToDinners);


// ***** Result *****:

// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.
// I found a bigger dinner table! More guests are invited:
// Dear Faisal Azad, I would be honored to have you join me for dinner.
// Dear Mahnoor, I would be honored to have you join me for dinner.
// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.
// Dear Juniad Akram, I would be honored to have you join me for dinner.