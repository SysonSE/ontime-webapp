define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap/js/collapse',
  'bootstrap/js/transition',
  'bootstrap/js/dropdown',
  'text!../../templates/navigation-template.html',
], function($, _, Backbone, Collapse, Transition, Dropdown, viewTemplate){
  'use strict';

  var NavigationView = Backbone.View.extend({

    el: $('.navigation'),

    compiledViewTemplate: _.template(viewTemplate),

    initialize: function(){
      this.render();
    },

    render: function () {
      var template = this.compiledViewTemplate();
      this.$el.html(template);
    },

  });

  return NavigationView;
});
