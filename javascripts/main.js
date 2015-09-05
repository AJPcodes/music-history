define(['jquery','bootstrap', 'dom-access', 'populate-songs', 'get-more-songs'], function($, bootstrap, domAccess, populateSongs, getMoreSongs) {

// Event Handlers!
//Remove songs on click
$(document).on('click', ".remove", domAccess.removeSong);

$('#addMoreSongs').css('display', 'none');

});
