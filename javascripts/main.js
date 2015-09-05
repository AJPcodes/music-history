define(['jquery','bootstrap', 'dom-access', 'populate-songs', 'get-more-songs'], function($, bootstrap, domAccess, populateSongs, getMoreSongs) {

	// Event Handlers!
	//Remove songs on click
	$(document).on('click', ".remove", domAccess.removeSong);

	$('#addMoreSongs').css('display', 'none');

	$('#addSongs').click(function(e){
			 e.preventDefault();

			console.log(populateSongs.getSongs());
			populateSongs.getSongs(domAccess.addSongsToDOM);

			$('#addSongs').css('display', 'none');
			$('#addMoreSongs').css('display', 'inline-block');

	});//end addSongs

	$('#addMoreSongs').click(function(e){
			 e.preventDefault();

			getMoreSongs.getSongs(domAccess.addSongsToDOM);

			$('#addMoreSongs').css('display', 'none');

	}); //End Add More Songs

});
