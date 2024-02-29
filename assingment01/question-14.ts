// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.Then use your list to print a message to each person, inviting them to dinner.;

// Solution No 14:

const guestList1 = ["Khursheed", "Ahsan", "Faizan"];

function inviteToDinner(guest) {
   console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}

guestList1.forEach(inviteToDinner);


// ***** Result *****:

// Dear Khursheed, I would be honored to have you join me for dinner.
// Dear Ahsan, I would be honored to have you join me for dinner.
// Dear Faizan, I would be honored to have you join me for dinner.