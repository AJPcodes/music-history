define(['jquery', 'firebase'], function($, fb) {


	var songListRef = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs');

	return {

		removeSong : function(){



				var theSongTitle = $(this).siblings('h3')[0].innerText;
				console.log(theSongTitle);

				var key = "";

				songListRef.once("value", function(allSongsSnapShot) {

 	 				allSongsSnapShot.forEach(function(songSnapShot) {

    				if (songSnapShot.child('title').val() == theSongTitle){

    						key = songSnapShot.key();

    					} //end if

  					}); //end for each

 	 				var songToRemove = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs/' + key);
					songToRemove.remove();

				});//end once

				console.log(key);

				$(this).parent().remove();

			}//end remove song

	};//end return statement

}); //end define statement

