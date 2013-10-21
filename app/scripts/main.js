/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap',
        modernizr: '../bower_components/modernizr/modernizr',
        text: '../bower_components/requirejs-text/text',
        requirejs: '../bower_components/requirejs/require'
    }
});

require([
  'backbone',
  './routers/router'
], function (Backbone, Router) {
  'use strict';

  var initialize = function () {
    // Initialisera routern
    Router.initialize();
  };

  initialize();
});

