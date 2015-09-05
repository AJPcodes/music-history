define(['jquery'], function($, domAccess) {
	//ajax request for songs.json

	return {

		getSongs: function(callback){

			$.ajax({
			url: "./../json-files/moreSongs.json",
			context: document.body
			}).done(function(response) {
			songs = response.songs;
			console.log(songs);
			callback(songs);
			});

		} //end getSongs
	};

});