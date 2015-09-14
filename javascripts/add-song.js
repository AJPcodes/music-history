define(['jquery', 'firebase'], function($, fb) {


	var songListRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs');


	return {


		addSong : function() {

			console.log('all linked up');

						 // CREATE A REFERENCE TO FIREBASE


		  // REGISTER DOM ELEMENTS
		  var songTitleField = $('#song_title');
		  var artistField = $('#artist');
		  var albumField = $('#album');
		  var genreField = $('#genre');

		  //FIELD VALUES
		  var newSongTitle = songTitleField.val();
		  var newArtist = artistField.val();
		  var newAlbum = albumField.val();
		  var newGenre = genreField.val();

		   //SAVE DATA TO FIREBASE AND EMPTY FIELD
		  songListRef.push(
		  	{
				title: newSongTitle,
				artist: newArtist,
				album: newAlbum,
				genre: newGenre
				}
		  )

		 	songTitleField.val('');
		  artistField.val('');
		  albumField.val('');
		  genreField.val('');

		  }



	};

});