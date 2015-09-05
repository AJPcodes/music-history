define(['jquery','dom-access'], function($, domAccess) {
	//ajax request for songs.json

$('#addMoreSongs').click(function(e){
		 e.preventDefault();
		$.ajax({
		  url: "./../json-files/moreSongs.json",
		  context: document.body
		}).done(function(response) {
		  domAccess.addSongsToDOM(response.songs);
		});

		$('#addMoreSongs').css('display', 'none');

}); //End Add More Songs


});