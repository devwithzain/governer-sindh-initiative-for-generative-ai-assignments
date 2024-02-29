// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

// Solution No 19:

const guestList = ["Khursheed", "Ahsan", "Faizan", "Iqbal", "Junaid", "Mahnoor"];

function inviteToDinner(guest) {
   console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

// Print the number of guests
console.log(`You are inviting ${guestList.length} guests to dinner.`);

guestList.forEach(inviteToDinner);

// ***** Result *****:

// You are inviting 6 guests to dinner.
// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.
// Dear Iqbal, I would be honored to have you join me for dinner.
// Dear Junaid, I would be honored to have you join me for dinner.
// Dear Mahnoor, I would be honored to have you join me for dinner.