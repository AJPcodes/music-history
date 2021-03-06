define(['jquery', 'lodash'], function($,_) {



	return function(allSongs) {


			var uniqueAlbums = _.chain(allSongs)
											.pluck('album')
											.uniq()
											.value();



			var uniqueArtists = _.chain(allSongs)
											.pluck('artist')
											.uniq()
											.value();

			var uniqueGenres = _.chain(allSongs)
											.pluck('genre')
											.uniq()
											.value();


			return {
				albums: uniqueAlbums,
				artists: uniqueArtists,
				genres: uniqueGenres
			};

		};
});
