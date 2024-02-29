// 15. Changing Guest List: You just heard that one of your guests can’t make the;
// dinner, so you need to send out a new set of invitations.You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
//    in your list.

// Solution No 15:

let guests = ["Khursheed", "Ahsan", "Faizan"];

let cannotMakeIt = guests.pop();
console.log(`${cannotMakeIt} can't make it to dinner.`);

guests.push("Isaac Newton");

for (let guest of guests) {
   console.log(`Dear ${guest}, you are still invited to dinner.`);
}



// ***** Result *****

// Faizan can't make it to dinner.
// Dear Khursheed, you are still invited to dinner.
// Dear Ahsan, you are still invited to dinner.
// Dear Isaac Newton, you are still invited to dinner.;