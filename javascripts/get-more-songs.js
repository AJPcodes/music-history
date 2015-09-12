define(['jquery'], function($) {


	return {


		getSongs : function(callback) {

				$.ajax({
				  url: "./../json-files/moreSongs.json",
				  context: document.body
				}).done(function(response) {
				  callback(response);
				});

			}
	};

});