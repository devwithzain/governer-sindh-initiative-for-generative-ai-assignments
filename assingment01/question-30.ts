// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'.Imagine you are writing code that will print a greeting to each user
// after they log in to a website.Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report ?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Solution No 30:

const usernames = ["user1", "admin", "user2", "user3", "user4"];

for (const username of usernames) {
   if (username.toLowerCase() === "admin") {
      console.log(`Hello admin, would you like to see a status report?`);
   } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
   }
}

// ***** Result *****:

// Hello user1, thank you for logging in again.
// Hello admin, would you like to see a status report ?
// Hello user2, thank you for logging in again.
// Hello user3, thank you for logging in again.
// Hello user4, thank you for logging in again.