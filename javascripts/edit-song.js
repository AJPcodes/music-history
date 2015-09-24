define(['jquery', 'firebase'], function($, fb) {



	return {

		editSong : function(){


				var key = this.id.split('#')[1];
 				var songToEdit = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs/' + key);

 				var title = '';
				var artist = '';
				var album = '';
				var genre = '';

				songToEdit.once("value", function(snapshot) {

  					title = snapshot.val().title;
  					artist = snapshot.val().artist;
  					album = snapshot.val().album;
  					genre = snapshot.val().genre;

				});

				var newTitle = prompt('New Title? Press Enter to skip.');
				var newArtist = prompt('New Artist? Press Enter to skip.');
				var newAlbum = prompt('New Album? Press Enter to skip.');
				var newGenre = prompt('New Genre? Press Enter to skip.');


				if (newTitle === '') {
					newTitle = title;
				}

				if (newArtist === '') {
					newArtist = artist;
				}

				if (newAlbum === '') {
					newAlbum = album;
				}

				if (newGenre === '') {
					newGenre = genre;
				}


 				songToEdit.set({
  				title: newTitle,
  				artist: newArtist,
  				album: newAlbum,
  				genre: newGenre
				});




			}//end edit song

	};//end return statement

}); //end define statement

