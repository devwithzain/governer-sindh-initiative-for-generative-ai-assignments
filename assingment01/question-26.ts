// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Solution No 26:

function alienPoints(color) {
   if (color.toLowerCase() === "green") {
      console.log("You just earned 5 points!");
      return 5;
   } else {
      console.log("You just earned 10 points!");
      return 10;
   }
}

// Run the if block scenario
alienPoints("green");

// Run the else block scenario (change the color to something other than "green")
alienPoints("blue");

// ***** Result *****:

// You just earned 5 points!
// You just earned 10 points!;