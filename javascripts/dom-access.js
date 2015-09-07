define(['jquery'], function($) {

	return {

		removeSong : function(){
			$(this).parent().remove();
		}, //end remove song

		addSongsToDOM : function(songs){

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
			}// end add songs to DOM



	}; //end return
});