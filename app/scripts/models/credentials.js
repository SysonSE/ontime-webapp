define([
  'backbone',
], function(Backbone){
  'use strict';

  // Modellen som håller login-data.
  var Credentials = Backbone.Model.extend({
    defaults: {
      username: 'test',
      password: 'hej'
    }
  });

  return Credentials;
});
