require(['jquery', 'dom-access'], function($, domAccess) {

//ajax request for songs.json
$('#addSongs').click(function(e){
		 e.preventDefault();
		 console.log('called add songs');
		$.ajax({
		  url: "./../json-files/songs.json",
		  context: document.body
		}).done(function(response) {
		  domAccess.addSongsToDOM(response.songs);
		});
		$('#addSongs').css('display', 'none');
		$('#addMoreSongs').css('display', 'inline-block');

});//end addSongs


});