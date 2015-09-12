requirejs.config({
	baseUrl: "./javascripts",
	paths:{
"jquery": "../lib/bower_components/jquery/dist/jquery.min",
"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
"hbs": "../lib/bower_components/require-handlebars-plugin/hbs"
	},

"shim": {
        "bootstrap": ["jquery"]
  }

});

require(['jquery','hbs','bootstrap','main'], function($, Handlebars, bootstrap, main) {} );