define(['jquery','unique'], function($, unique) {


	return {

			addSongsToDOM : function(songs){


			require(['hbs!../templates/songs'], function(songTemplate) {
        $('#addSongsHere').html(songTemplate(songs));
      });

      var uniqueArtists = unique(songs.songs).artists;


      require(['hbs!../templates/artistList'], function(artistTemplate) {
        $('#artist_list').html(artistTemplate({artists: uniqueArtists}));

        });

      var uniqueAlbums = unique(songs.songs).albums;

      require(['hbs!../templates/albumList'], function(albumTemplate) {
        $('#album_list').html(albumTemplate({albums:uniqueAlbums}));
      });

      var uniqueGenres = unique(songs.songs).genres;

      require(['hbs!../templates/genreList'], function(genreTemplate) {
        $('#genres').html(genreTemplate({genres:uniqueGenres}));

				});


			}// end add songs to DOM

	}; //end return
});