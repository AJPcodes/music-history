// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the resources/js-101.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.



var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var addSongEnd = function(title, artist, album) {
	song = title + " - by " + artist + " on the album " + album;
	songs.push(song);
};
var addSongStart = function(title, artist, album) {
	song = title + " - by " + artist + " on the album " + album;
	songs.unshift(song);
};

addSongEnd("Shake it Off", "Taylor Swift", "1989");
addSongStart("Budapest", "George Ezra", "Wanted on Voyage");

for (i = 0; i < songs.length; i++) {
	var songString = songs[i];


//need to figure out regular expressions

	songString = songString.replace(/[!@#$%^&*()]/g, "");
	songString = songString.replace(">", "-");

	songs[i] = songString;
}

var writeSongsToDOM = function() {

	//isolate the individual variable strings
	for (i = 0; i < songs.length; i++) {
	var title = "";
	title = songs[i].slice(0, songs[i].indexOf(" - by"));
	console.log(title);

	var artist = "";
	artist = songs[i].slice(songs[i].indexOf(" - by ") + 6, songs[i].indexOf(" on the album"));
	console.log(artist);

	var album = "";
	album = songs[i].slice(songs[i].indexOf("on the album ") + 13, songs[i].length);
	console.log(album);

	var historyDiv = document.getElementById('addSongsHere');
	historyDiv.innerHTML += "<h3>" + title + "</h3> <p> " + artist + "</p> | <p>" + album + "</p> | <p> Genre </p>";
	}
}

writeSongsToDOM();

