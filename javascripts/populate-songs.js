define(['jquery'], function($) {


	return {


		getSongs : function(callback) {

				$.ajax({
				  url: "./../json-files/songs.json",
				  context: document.body
				}).done(function(response) {
				  callback(response);
				});

			}
	};

});