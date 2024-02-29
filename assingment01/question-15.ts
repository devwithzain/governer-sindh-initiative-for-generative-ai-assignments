// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.You’ll have to think of someone else to invite.;

// Solution No 15:

const guestList2 = ["Khursheed", "Ahsan", "Faizan"];

function inviteToDinner(guest) {
   console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

guestList2.forEach(inviteToDinner);

console.log("Unfortunately, Iqbal can't make it to dinner.");

// Replace Alan Turing with a new guest
guestList2[2] = "Junaid Alam";

// Print new invitations
guestList2.forEach(inviteToDinner);


// ***** Result *****

// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.
// Unfortunately, Iqbal can't make it to dinner.
// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Junaid Alam, I would be honored to have you join me for dinner.