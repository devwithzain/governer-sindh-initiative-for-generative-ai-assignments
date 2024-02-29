// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.If it has, print a message that the person will need to enter a;
// new username.If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.

// Solution No 32:

function isUsernameAvailable(currentUsers, newUsername) {
   for (const user of currentUsers) {
      if (user.toLowerCase() === newUsername.toLowerCase()) {
         return false; // Username already exists
      }
   }
   return true; // Username is available
}

const currentUsers = ["user1", "admin", "user3"];
const newUsers = ["user2", "admin", "user4", "user1"];

for (const user of newUsers) {
   if (isUsernameAvailable(currentUsers, user)) {
      console.log(`${user} is available.`);
   } else {
      console.log(`${user} is not available. Please enter a new username.`);
   }
}

// ***** Result *****:

// user2 is available.
// admin is not available.Please enter a new username.
// user4 is available.
// user1 is not available.Please enter a new username.;