define(['jquery'], function($) {


	return {


		getSongs : function(callback) {


			$.ajax({
        url: "https://ajpmusichistory.firebaseio.com/.json"
      }).done(
        function(firebaseData) {
          // Execute the callback function that was sent to me
          //console.log("songs array from Firebase: ", firebaseData);
          callback(firebaseData.songs);
        }
      );





				// $.ajax({
				//   url: "./../json-files/songs.json",
				//   context: document.body
				// }).done(function(response) {
				//   callback(response);
				// });

			}
	};

});