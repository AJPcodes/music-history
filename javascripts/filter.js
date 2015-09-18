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


        } else {

         filteredSongs = songs.songs;

        }



        if(albumFilter != "All") {
          filteredSongs = _.filter(filteredSongs, function(n) {
              return n.album === albumFilter;
          });
        }


        var checkedGenres = $('#genres').children('div').children('input');

        checkedGenres =  checkedGenres.filter(function(index, element){

         return element.checked;

         });


        checkedGenres = _.pluck(checkedGenres, 'value');




         filteredSongs = _.filter(filteredSongs, function(element, index){

            if (checkedGenres.indexOf(element.genre) != -1){
              return true;
            }
          });



        require(['hbs!../templates/songs'], function(songTemplate) {
            $('#addSongsHere').html(songTemplate({songs: filteredSongs}));
         });


			}// filter songs

	}; //end return


});