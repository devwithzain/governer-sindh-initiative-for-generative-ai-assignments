// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.Print your list to make sure you actually have an empty list at the end
// of your program.

// Solution No 17:

const guestList = ["Khursheed", "Ahsan", "Faizan", "Iqbal", "Junaid", "Mahnoor"];

function inviteToDinner1(guest) {
   console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

guestList.forEach(inviteToDinner1);

console.log("Unfortunately, the new table won't arrive on time, so I can only invite two guests.");

// Remove guests until only two remain
while (guestList.length > 2) {
   const removedGuest = guestList.pop();
   if (removedGuest) {
      console.log(`Dear ${removedGuest}, I'm so sorry, but due to limited space, I can't invite you to dinner.`);
   }
}

// Print invitations for remaining guests
guestList.forEach(inviteToDinner1);

// Empty the list
guestList.length = 0;

// Print empty list to confirm
console.log("Guest list:", guestList);



// ***** Result *****:

// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.
// Dear Iqbal, I would be honored to have you join me for dinner.
// Dear Junaid, I would be honored to have you join me for dinner.
// Dear Mahnoor, I would be honored to have you join me for dinner.
// Unfortunately, the new table won't arrive on time, so I can only invite two guests.
// Dear Mahnoor, I'm so sorry, but due to limited space, I can't invite you to dinner.
// Dear Junaid, I'm so sorry, but due to limited space, I can't invite you to dinner.
// Dear Iqbal, I'm so sorry, but due to limited space, I can't invite you to dinner.
// Dear Faizan, I'm so sorry, but due to limited space, I can't invite you to dinner.
// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Guest list: [];