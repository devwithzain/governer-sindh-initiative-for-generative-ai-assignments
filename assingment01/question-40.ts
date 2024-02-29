// 40. Album: Write a function called make_album() that builds a Object
// describing a music album.The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of;
// information.Use the function to make three dictionaries representing different;
// albums.Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album.If the calling line includes a value for the number
// of tracks, add that value to the album’s Object.Make at least one new
//    function call that includes the number of tracks on an album.;

// Solution No 40:

function makeAlbum(artist, title, tracks?) {
   return { artist, title, tracks };
}

const album1 = makeAlbum("The Beatles", "Abbey Road");
const album2 = makeAlbum("Pink Floyd", "Dark Side of the Moon", 59);
const album3 = makeAlbum("Kendrick Lamar", "Mr. Morale & the Big Steppers");

console.log(album1);
console.log(album2);
console.log(album3);

// ***** Result *****:

// {
//    artist: 'The Beatles',
//    title: 'Abbey Road',
//    tracks: undefined;
// }
// {
//    artist: 'Pink Floyd',
//    title: 'Dark Side of the Moon',
//    tracks: 59;
// }
// {
//    artist: 'Kendrick Lamar',
//    title: 'Mr. Morale & the Big Steppers',
//    tracks: undefined;
// }