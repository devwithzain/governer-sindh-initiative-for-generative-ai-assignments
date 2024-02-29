// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich.The function should have one parameter that collects as many;
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered.Call the function three times, using a different number
// of arguments each time.

// Solution No 44:

function orderSandwich(...ingredients) {
   if (ingredients.length === 0) {
      console.log("You haven't ordered any ingredients for your sandwich.");
      return;
   }

   console.log(`Your sandwich includes: ${ingredients.join(", ")}`);
}

orderSandwich("bread", "cheese", "tomato"); // Bread, cheese, tomato
orderSandwich("bread", "ham", "lettuce", "mustard"); // Bread, ham, lettuce, mustard
orderSandwich(); // No ingredients

// ***** Result *****:

// Your sandwich includes: bread, cheese, tomato
// Your sandwich includes: bread, ham, lettuce, mustard
// You haven't ordered any ingredients for your sandwich.;