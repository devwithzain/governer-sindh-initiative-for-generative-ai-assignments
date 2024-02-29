// 27. Alien Colors #3: Turn your if-else chain from Exercise 5 - 4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Solution No 27:

function alienPoints2(color) {
   if (color.toLowerCase() === "green") {
      console.log("You earned 5 points.");
      return 5;
   } else if (color.toLowerCase() === "yellow") {
      console.log("You earned 10 points.");
      return 10;
   } else if (color.toLowerCase() === "red") {
      console.log("You earned 15 points.");
      return 15;
   } else {
      console.log("Invalid alien color.");
      return 0; // Handle invalid color (optional)
   }
}

// Run scenarios for each color
alienPoints2("green");
alienPoints2("yellow");
alienPoints2("red");
alienPoints2("purple"); // Test invalid color (optional)

// ***** Result *****:

// You earned 5 points.
// You earned 10 points.
// You earned 15 points.
// Invalid alien color.;