define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  'use strict';

  // Modellen som håller login-data.
  var Credentials = Backbone.Model.extend({
    defaults: {
      username: 'test',
      password: 'hej'
    }
  });
});
