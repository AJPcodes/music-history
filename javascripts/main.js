require(['jquery', 'firebase', 'Q','dom-access','add-song', 'remove-song', 'edit-song', 'filter', 'getSongs'], function($, fb, Q, domAccess, addSong, removeSong, editSong, filter, getSongs) {


	//var songsRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs');


	// songsRef.on('value', function(SS) {
	// 					songs = SS.val();
	// 					domAccess.addSongsToDOM(songs);
	// 			});

	//promise conected to firebase
	var songsPromise = getSongs.getSongs();

	songsPromise.then(function(json_data){
			domAccess.addSongsToDOM(json_data);
	});

	//event handlers for add and remove
	$(document).on('click', ".remove", removeSong.removeSong);
	$(document).on('click', ".edit", editSong.editSong);

	//toggles remove and edit button displays on song click
	$(document).on('click', ".song", function(){
		$(this).children('.remove').toggle('display');
		$(this).children('.edit').toggle('display');

	});

	//calls add song on add song click
	$('#add-song').click(function(e){
				e.preventDefault();
				addSong.addSong();
			});//end addSong

	//repopulates song based on filter options
	$('#filterSongs').click(function(e){
			e.preventDefault();
			songsPromise.then(function(json_data){
				filter.filterSongs(json_data);
		});
	});//end addSong



});