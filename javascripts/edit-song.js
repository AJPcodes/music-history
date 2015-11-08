define(['jquery', 'Q'], function($, Q) {



	return {

		editSong : function(){


				var key = this.id.split('#')[1];

 				var editPromise = function(){

			      var deferred = Q.defer();

			        $.ajax({
			          url: 'https://ajpmusichistory.firebaseio.com/songs/songs/' + key + '.json',
			          type: "GET"
			         }).done(function(data) {
			            deferred.resolve(data);
			          }).fail(function(xhr, status, error) {
			      deferred.reject(error);
			          });

			          return deferred.promise;

						};// end song to Edit

				var songToEdit = editPromise();

 				console.log(key);

 				var title = '';
				var artist = '';
				var album = '';
				var genre = '';

				songToEdit.then(function(snapshot) {



  					title = snapshot.title;
  					artist = snapshot.artist;
  					album = snapshot.album;
  					genre = snapshot.genre;



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

		 				var editedSong = {

		  					'title': newTitle,
		  					'artist': newArtist,
		  					'album': newAlbum,
		  					'genre': newGenre

						};

						$.ajax({
			          type: "POST",
			          url: 'https://ajpmusichistory.firebaseio.com/songs/songs/' + key,
			          data: editedSong,
			          dataType: "json",

			         })




				});




			}//end edit song

	};//end return statement

}); //end define statement

