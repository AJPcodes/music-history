define(['jquery', 'Q'], function($, Q) {


	return {

    getSongs: function(){

      var deferred = Q.defer();

        $.ajax({
          url: "https://ajpmusichistory.firebaseio.com/songs/.json",
          type: "GET"
         }).done(function(data) {
            deferred.resolve(data);
          }).fail(function(xhr, status, error) {
      deferred.reject(error);
          });

          return deferred.promise;

			}// end get Songs

	}; //end return
});