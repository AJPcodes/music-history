define(['jquery', 'lodash'], function($,_) {




	return {

			filterSongs : function(songs){

        var artistFilter = $('#artistInput').val();
        var albumFilter = $('#albumInput').val();

        if(artistFilter != "All"){

          var filteredSongs = _.filter(songs.songs, function(n) {
              return n.artist === artistFilter;
          });


        } else {

         var filteredSongs = songs.songs;

        };



        if(albumFilter != "All") {
          filteredSongs = _.filter(filteredSongs, function(n) {
              return n.album === albumFilter;
          });
       }


      var checkedGenres = $('#genres').children('div').children('input')

      checkedGenres =  checkedGenres.filter(function(index, element){

        return element.checked;

      });


       var checkedGenres = _.pluck(checkedGenres, 'value');

      console.log(checkedGenres);

      checkedGenres.forEach( function(element){
        console.log(element);

          filteredSongs = _.filter(filteredSongs, function(n) {
              return n.genre === element;
          });

      });

      require(['hbs!../templates/songs'], function(songTemplate) {
        $('#addSongsHere').html(songTemplate({songs: filteredSongs}));
      });


			}// filter

	}; //end return


});