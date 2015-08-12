// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the resources/js-101.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.



var songs = [];

var addSongEnd = function(title, artist, album, genre) {
	song = title + " - by " + artist + " on the album " + album + " : " + genre;
	songs.push(song);
};
var addSongStart = function(title, artist, album, genre) {
	song = title + " - by " + artist + " on the album " + album + " : " + genre;
	songs.unshift(song);
};

addSongEnd("Legs", "ZZTop", "Eliminator", "genre");
addSongEnd("The Logical Song", "Supertramp", "Breakfast in America", "genre");
addSongStart("Another Brick in the Wall", "Pink Floyd", "The Wall", "Rock");
addSongEnd("Welcome to the Jungle", "Guns & Roses", "Appetite for Destruction", "Rock");
addSongEnd("Ironic", "Alanis Morisette", "Jagged Little Pill", "Pop");
addSongEnd("Shake it Off", "Taylor Swift", "1989", "Pop");
addSongStart("Budapest", "George Ezra", "Wanted on Voyage", "Pop");
addSongStart("Doin' It Right", "Daft Punk", "Random Access Memories", "Electro Pop");
addSongStart("Fembot", "Robyn", "Body Talk", "Pop");
addSongStart("Ferrah Fawcett Hair", "Capital Cities", "In a Tidal Wave of Mystery", "Indie Pop");
addSongStart("Sunrust", "Pilot Rouge", "Lengends", "Indie Rock");

for (i = 0; i < songs.length; i++) {
	var songString = songs[i];


//need to figure out regular expressions

	songString = songString.replace(/[!@#$%^*()]/g, "");
	songString = songString.replace(">", "-");

	songs[i] = songString;
}

var writeSongsToDOM = function() {

	//isolate the individual variable strings
	for (i = 0; i < songs.length; i++) {
	var title = "";
	title = songs[i].slice(0, songs[i].indexOf(" - by"));

	var artist = "";
	artist = songs[i].slice(songs[i].indexOf(" - by ") + 6, songs[i].indexOf(" on the album"));

	var album = "";
	album = songs[i].slice(songs[i].indexOf("on the album ") + 13, songs[i].indexOf(" : "));

	var genre = "";
	genre = songs[i].slice(songs[i].indexOf(" : ") + 3, songs[i].length);

	var historyDiv = document.getElementById('addSongsHere');
	historyDiv.innerHTML += "<div class='song'><h3>" + title + "</h3> <p> " + artist + "</p> | <p>" + album + "</p> | <p> " + genre +" </p></div>";
	}
}

writeSongsToDOM();

