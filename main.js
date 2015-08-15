//Functions

//Function to remove songs, called by clicking "remove"
var removeSong = function(){
	$(this).parent().remove();
}; //end remove song

$('#addMoreSongs').css('display', 'none');


//add songs after getting JSON data. Called by add songs buttons
function addSongsToDOM(songs){

//declare variables
	var title = "";
	var artist = "";
	var album = "";
	var genre = "";

	var historyDiv = $('#addSongsHere');

//iterate over songs array
	$.each(songs, function(e, song){

	title = song.title;
	artist = song.artist;
	album = song.album;
	genre = song.genre;

	historyDiv.append("<div class='song'><h3>" + title + "</h3> <p> " + artist + "</p> | <p>" + album + "</p> | <p> " + genre +" </p> <button class='remove'>Remove</button></div>");


 });//end each loop
};// end add songs to DOM


//ajax request for songs.json
$('#addSongs').click(function(e){
		 e.preventDefault();
		$.ajax({
		  url: "./json-files/songs.json",
		  context: document.body
		}).done(function(response) {
		  addSongsToDOM(response.songs);
		});
		$('#addSongs').css('display', 'none');
		$('#addMoreSongs').css('display', 'inline-block');

});//end addSongs


//Add more song. AJAX for moreSongs.json
$('#addMoreSongs').click(function(e){
		 e.preventDefault();
		$.ajax({
		  url: "./json-files/moreSongs.json",
		  context: document.body
		}).done(function(response) {
		  addSongsToDOM(response.songs);
		});

		$('#addMoreSongs').css('display', 'none');

}); //End Add More Songs


// Event Handlers!
//Remove songs on click
$(document).on('click', ".remove", removeSong);

