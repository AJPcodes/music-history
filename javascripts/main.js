require(['jquery', 'firebase', 'q','dom-access','add-song', 'remove-song', 'edit-song', 'filter', 'getSongs'], function($, fb, Q, domAccess, addSong, removeSong, editSong, filter, getSongs) {


	//var songsRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs');


	// songsRef.on('value', function(SS) {
	// 					songs = SS.val();
	// 					domAccess.addSongsToDOM(songs);
	// 			});

	getSongs.getSongs().then(function(json_data){
			console.log(json_data);
			domAccess.addSongsToDOM(json_data);
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