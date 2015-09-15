define(['jquery','unique'], function($, unique) {


	return {

			addSongsToDOM : function(songs){

			require(['hbs!../templates/songs'], function(songTemplate) {
        $('#addSongsHere').html(songTemplate(songs));
      });

      var uniqueArtists = unique(songs.songs).artists;
      console.log(uniqueArtists);


      require(['hbs!../templates/artistList'], function(artistTemplate) {
        $('#artist_list').append(artistTemplate({artists: uniqueArtists}));

        });

      var uniqueAlbums = unique(songs.songs).albums;
      console.log(uniqueAlbums);

      require(['hbs!../templates/albumList'], function(albumTemplate) {
        $('#album_list').append(albumTemplate({albums:uniqueAlbums}));
      });

      var uniqueGenres = unique(songs.songs).genres;

      require(['hbs!../templates/genreList'], function(genreTemplate) {
        $('#genres').append(genreTemplate({genres:uniqueGenres}));

				});


			}// end add songs to DOM

	}; //end return
});