define(['jquery'], function($) {


	return {


		removeSong : function(){
			$(this).parent().remove();
		}, //end remove song

			addSongsToDOM : function(songs){

			require(['hbs!../templates/songs'], function(songTemplate) {
        $('#addSongsHere').html(songTemplate(songs));
      });

			require(['hbs!../templates/artistList'], function(artistTemplate) {
        $('#artist_list').append(artistTemplate(songs));

        var populatedArtists = [];


      	$('#artist_list').children('option').each(function(index, element){

      		if (populatedArtists.indexOf(element.value) === -1) {
      			populatedArtists.push(element.value)
      		} else {
      			element.remove();
      		}
		   	});


      });

      require(['hbs!../templates/albumList'], function(albumTemplate) {
        $('#album_list').append(albumTemplate(songs));

        var populatedAlbums =[];

      	$('#album_list').children('option').each(function(index, element){

      		if (populatedAlbums.indexOf(element.value) === -1) {
      			populatedAlbums.push(element.value)
      		} else {
      			element.remove();
      		}

		   	});


      });



      require(['hbs!../templates/genreList'], function(genreTemplate) {
        $('#genres').append(genreTemplate(songs));

        var populatedGenres =[];

      	$('#genres').children('div').children('input').each(function(index, element){

      		if (populatedGenres.indexOf(element.value) === -1) {
      			populatedGenres.push(element.value)
      		} else {
      			console.log(element);
      			$(this).parent().remove();
      		}

				});


      });



			/*
				//declare variables
				var title = "";
				var artist = "";
				var album = "";
				var genre = "";

			//iterate over songs array
				$.each(songs, function(e, song){

				title = song.title;
				artist = song.artist;
				album = song.album;
				genre = song.genre;

				historyDiv.append("<div class='song'><h3>" + title + "</h3> <p> " + artist + "</p> | <p>" + album + "</p> | <p> " + genre +" </p> <button class='remove'>Remove</button></div>");

			 });//end each loop
			*/

			}// end add songs to DOM



	}; //end return
});