// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.It
// should then accept an arbitrary number of keyword arguments.Call the function
// with the required information and two other name - value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.;

// Solution No 45:

function createCar(manufacturer, model, ...rest) {
   const car = { manufacturer, model };
   for (const [key, value] of rest) {
      car[key] = value;
   }
   return car;
}

const car1 = createCar("Toyota", "Camry", "color", "red", "feature", "sunroof");
const car2 = createCar("Honda", "Civic");

console.log(car1);
console.log(car2);

// ***** Result *****:

// {
//    manufacturer: 'Toyota',
//    model: 'Camry',
//    c: 'o',
//    r: 'e',
//    f: 'e',
//    s: 'u';
// }
// { manufacturer: 'Honda', model: 'Civic'; }