// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country.The function should print a simple sentence, such as
//    Karachi is in Pakistan.Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

// Solution No 38:

function describeCity(city, country = "Pakistan") {
   console.log(`${city} is in ${country}.`);
}

describeCity("Karachi"); // Karachi is in Pakistan
describeCity("Paris", "France"); // Paris is in France
describeCity("New York", "USA"); // New York is in USA

// ***** Result *****:

// Karachi is in Pakistan.
// Paris is in France.
// New York is in USA.;