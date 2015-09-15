define(['jquery','unique'], function($, unique) {


	return {

			addSongsToDOM : function(songs){

			require(['hbs!../templates/songs'], function(songTemplate) {
        $('#addSongsHere').html(songTemplate(songs));
      });

      var uniqueAlbums = unique(songs.songs).albums;

			require(['hbs!../templates/artistList'], function(artistTemplate) {
        $('#artist_list').append(artistTemplate({artists: uniqueArtists}));

        });

      var uniqueArtists = unique(songs.songs).artists;

      require(['hbs!../templates/albumList'], function(albumTemplate) {
        $('#album_list').append(albumTemplate({albums:uniqueAlbums}));
      });



      require(['hbs!../templates/genreList'], function(genreTemplate) {
        $('#genres').append(genreTemplate(songs));

        var populatedGenres =[];

      	$('#genres').children('div').children('input').each(function(index, element){

      		if (populatedGenres.indexOf(element.value) === -1) {
      			populatedGenres.push(element.value);
      		} else {

      			$(this).parent().remove();
      		}

				});


      });

			}// end add songs to DOM

	}; //end return
});