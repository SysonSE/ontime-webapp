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
        bootstrap: '../bower_components/bootstrap',
        modernizr: '../bower_components/modernizr/modernizr',
        'requirejs-text': '../bower_components/requirejs-text/text',
        requirejs: '../bower_components/requirejs/require'
    }
});

require([
  'backbone',
  './routers/router'
], function (Backbone, Router) {
  'use strict';
  console.log('HELLO MAIN');
  var initialize = function() {
    console.log('INSIDE MAIN FUNCTION');
    // Initialisera routern
    Router.initialize();
  };

  console.log('RETURNING');

  return {
    initialize: initialize
  };
  /*
  var NavigationView = Backbone.View.extend({

    el: $('.navigation'),

    navigationTemplate: _.template($('#navigation-template').html()),

    initialize: function(){
      this.render();
    },

    render: function () {
      var template = this.navigationTemplate();
      this.$el.html(template);
    },

  });

  var TimeReportView = Backbone.View.extend({

    el: $('.main-container'),

    timeReportTemplate: _.template($('#time-report-template').html()),

    initialize: function(){
      this.render();
    },

    render: function () {
      var template = this.timeReportTemplate();
      this.$el.html(template);
    },

  });

  */
});

