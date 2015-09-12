require(['jquery', 'dom-access','populate-songs','get-more-songs'], function($, domAccess, populateSongs, getMoreSongs) {



	$(document).on('click', ".remove", domAccess.removeSong);

	$('#addMoreSongs').css('display', 'none');

	$('#addSongs').click(function(e){
					 e.preventDefault();


					populateSongs.getSongs(domAccess.addSongsToDOM);
					$('#addSongs').css('display', 'none');
					$('#addMoreSongs').css('display', 'inline-block');

			});//end addSongs

	$('#addMoreSongs').click(function(e){
					 e.preventDefault();
					getMoreSongs.getSongs(domAccess.addSongsToDOM);
					$('#addMoreSongs').css('display', 'none');

			});//end addSongs




});