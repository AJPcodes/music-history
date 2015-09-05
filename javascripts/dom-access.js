define(['jquery'], function($) {

	//Function to remove songs, called by clicking "remove"

	return {
		removeSong : function(){
			$(this).parent().parent().remove();
		}, //end remove song

//add songs after getting JSON data. Called by add songs buttons
		addSongsToDOM : function(songs){

			console.log(songs);
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

				historyDiv.append("<div class='song col-sm-12 col-lg-6'><h3>" + title + "</h3> <p class='col-sm-3 col-lg-11'> " + artist + "</p>  <p class='col-sm-3 col-lg-11'>" + album + "</p>  <p class='col-sm-3 col-lg-11'> " +	 genre +" </p> <div class=' col-sm-11'> <button class='remove'>Remove</button></div></div>");

 		});//end each loop

	}// end add songs to DOM

};//end returned object


});