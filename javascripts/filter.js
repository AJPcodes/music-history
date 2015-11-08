define(['jquery', 'lodash'], function($,_) {




	return {

			filterSongs : function(songs){

        var artistFilter = $('#artistInput').val();
        var albumFilter = $('#albumInput').val();
        var filteredSongs = songs.songs;

        if(artistFilter != "All"){

          filteredSongs = _.filter(songs.songs, function(n) {
              return n.artist === artistFilter;
          });

        }

        if(albumFilter != "All") {
          filteredSongs = _.filter(filteredSongs, function(n) {
              return n.album === albumFilter;
          });
        }

        //builds an array of checked  Genres
        var checkedGenres = $('#genres').children('div').children('input');

        checkedGenres =  checkedGenres.filter(function(index, element){

         return element.checked;

         });

        //build an array of the checked genres values
        checkedGenres = _.pluck(checkedGenres, 'value');

        //only return songs who's genre matches the filtered songs array
         filteredSongs = _.filter(filteredSongs, function(element, index){

            if (checkedGenres.indexOf(element.genre) != -1){
              return true;
            }
          });

         //populate DOM with filtered songs
        require(['hbs!../templates/songs'], function(songTemplate) {
            $('#addSongsHere').html(songTemplate({songs: filteredSongs}));
         });


			}// filter songs

	}; //end return


});