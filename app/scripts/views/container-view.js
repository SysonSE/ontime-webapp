define([
    'jquery',
    'underscore',
    'backbone',
    './navigation-view',
    './report-view',
], function($, _, Backbone, NavigationView, ReportView) {
  'use strict';

  var ContainerView = Backbone.View.extend({
    initialize: function(){
      this.render();
    },

    renderLandingPage: function(){
        var navigationView = new NavigationView();
        var reportView = new ReportView();
    }
  });

  return ContainerView;
});
