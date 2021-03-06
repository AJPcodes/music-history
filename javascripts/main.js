require(['jquery', 'firebase','dom-access','add-song', 'remove-song', 'edit-song', 'filter'], function($, fb, domAccess, addSong, removeSong, editSong, filter) {


	var songsRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs');
	var songs;

	songsRef.on('value', function(SS) {
						songs = SS.val();
						domAccess.addSongsToDOM(songs);
				});



	$(document).on('click', ".remove", removeSong.removeSong);
	$(document).on('click', ".edit", editSong.editSong);


	$(document).on('click', ".song", function(){
		$(this).children('.remove').toggle('display');
		$(this).children('.edit').toggle('display');

	});


	$('#add-song').click(function(e){
				e.preventDefault();

				addSong.addSong();
			});//end addSong

	$('#filterSongs').click(function(e){
			e.preventDefault();

			filter.filterSongs(songs);
		});//end addSong



});