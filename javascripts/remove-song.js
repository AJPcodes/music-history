define(['jquery', 'firebase'], function($, fb) {



	return {

		removeSong : function(){


				var key = this.id.split('#')[1];

 				var songToRemove = new Firebase('https://ajpmusichistory.firebaseio.com/songs/songs/' + key);
				songToRemove.remove();


				$(this).parent().remove();

			}//end remove song

	};//end return statement

}); //end define statement

