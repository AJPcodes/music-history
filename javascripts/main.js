require(['jquery', 'dom-access','populate-songs', 'add-song', 'remove-song'], function($, domAccess, populateSongs, addSong, removeSong) {



	$(document).on('click', ".remove", removeSong.removeSong);

	$(document).on('click', ".song", function(){
		$(this).children('.remove').css('display', 'block');
	});

	$('#addSongs').click(function(e){
					 e.preventDefault();


					populateSongs.getSongs(domAccess.addSongsToDOM);
					$('#addSongs').css('display', 'none');

			});//end addSongs

	$('#add-song').click(function(e){
				e.preventDefault();

				addSong.addSong();
			});//end addSong


});