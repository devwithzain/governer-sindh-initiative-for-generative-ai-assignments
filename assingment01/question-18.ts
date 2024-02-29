// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array.Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list.Print the array to show that its
// order has changed.

// • Reverse the order of your list again.Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.Print the list to show that its order has changed.

// Solution No 18:

// Create an array of places
const placesToVisit = [
   "Machu Picchu",
   "Santorini",
   "Great Barrier Reef",
   "Petra",
   "Bora Bora"
];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order (without modifying the actual list)
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Confirm that the original order remains unchanged
console.log("\nStill in original order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Confirm that the original order remains unchanged
console.log("\nStill in original order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order again to restore the original order
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);

// ***** Result *****:

// Original order:
// [
//    'Machu Picchu',
//    'Santorini',
//    'Great Barrier Reef',
//    'Petra',
//    'Bora Bora'
// ]

// Alphabetical order:
// [
//    'Bora Bora',
//    'Great Barrier Reef',
//    'Machu Picchu',
//    'Petra',
//    'Santorini'
// ];

// Still in original order:
// [
//    'Machu Picchu',
//    'Santorini',
//    'Great Barrier Reef',
//    'Petra',
//    'Bora Bora'
// ]

// Reverse alphabetical order:
// [
//    'Santorini',
//    'Petra',
//    'Machu Picchu',
//    'Great Barrier Reef',
//    'Bora Bora'
// ];

// Still in original order:
// [
//    'Machu Picchu',
//    'Santorini',
//    'Great Barrier Reef',
//    'Petra',
//    'Bora Bora'
// ]

// Reversed order:
// [
//    'Bora Bora',
//    'Petra',
//    'Great Barrier Reef',
//    'Santorini',
//    'Machu Picchu'
// ]

// Back to original order:
// [
//    'Machu Picchu',
//    'Santorini',
//    'Great Barrier Reef',
//    'Petra',
//    'Bora Bora'
// ];

// Sorted in alphabetical order:
// [
//    'Bora Bora',
//    'Great Barrier Reef',
//    'Machu Picchu',
//    'Petra',
//    'Santorini'
// ];

// Sorted in reverse alphabetical order:
// [
//    'Santorini',
//    'Petra',
//    'Machu Picchu',
//    'Great Barrier Reef',
//    'Bora Bora'
// ];