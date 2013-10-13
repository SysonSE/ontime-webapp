define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap/js/collapse',
  'bootstrap/js/transition',
  'text!../../templates/navigation-template.html',
], function($, _, Backbone, Collapse, Transition, navigationTemplate){
  'use strict';

  var NavigationView = Backbone.View.extend({

    el: $('.navigation'),

    compiledNavigationTemplate: _.template(navigationTemplate),

    initialize: function(){
      this.render();
    },

    render: function () {
      var template = this.compiledNavigationTemplate();
      this.$el.html(template);
    },

  });

  return NavigationView;
});
