requirejs.config({
	baseUrl: './javascripts',
	paths:{
'jquery': '../lib/bower_components/jquery/dist/jquery.min',
'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
'firebase': '../lib/bower_components/firebase/firebase',
'lodash': '../lib/bower_components/lodash/lodash.min',
'Q': '../lib/bower_components/q/q'

	},

'shim': {
        'bootstrap': ['jquery'],
        'firebase': {
        		exports: 'Firebase'
        },

       }

});

require(['jquery','hbs','bootstrap', 'Q', 'firebase', 'lodash','main'], function($, Handlebars, bootstrap, Q, fb, _, main) {

} );