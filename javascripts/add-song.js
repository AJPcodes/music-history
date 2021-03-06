define(['jquery', 'firebase'], function($, fb) {


	// var songListRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs');


	return {


		addSong : function() {



						 // CREATE A REFERENCE TO FIREBASE


		  // REGISTER DOM ELEMENTS
		  var songTitleField = $('#song_title');
		  var artistField = $('#artist');
		  var albumField = $('#album');
		  var genreField = $('#genre');


		  var newSong = {
		  	"title": songTitleField.val(),
			"artist": artistField.val(),
			"album": albumField.val(),
			"genre": genreField.val()

		  };


		  $.ajax({
		  	url: "https://ajpmusichistory.firebaseio.com/songs/songs.json",
		  	method: "POST",
		  	data: JSON.stringify(newSong)
		  }).done(function(addedSong){
		  		console.log(addedSong);
		  });




		   //SAVE DATA TO FIREBASE AND EMPTY FIELD
		  // songListRef.push(
		  // 	{
		//		title: songTitleField.val(),
		//	artist: artistField.val(),
		//	album: albumField.val(),
		//	genre: genreField.val()
				// }
		  // );

		 	songTitleField.val('');
		  artistField.val('');
		  albumField.val('');
		  genreField.val('');

		  }



	};

});