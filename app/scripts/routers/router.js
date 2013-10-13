define([
  'jquery',
  'underscore',
  'backbone',
  '../views/login-view',
  '../views/navigation-view',
  '../models/credentials',
], function($, _, Backbone, LoginView, NavigationView, Credentials){
  'use strict';

  // Routern har hand om navigeringen runt på sidan. Den tar bort/skapar nödvändiga vyer.
  var ApplicationRouter = Backbone.Router.extend({
    routes: {
      '': 'showLogin',
      'main': 'showMain'
    },

    showLogin: function() {
      var credentials = new Credentials();
      this.loginView = new LoginView({model: credentials});
    },

    showMain: function() {
      if (this.loginView) {
        this.loginView.remove();
      }
      this.navigationView = new NavigationView();
    }

  });

  var initialize = function(){
    // Initialiserar routern som i sin tur skapar vyn och sen rullar appen.
    var router = new ApplicationRouter($('#'));
    // Lyssnar på router-events, dvs navigering. Gör så att man kan trycka på t.ex. bakåt-knappen. Måste initialiseras efter routern.
    Backbone.history.start();
  };

  // Från routern returnerar vi endast initialize-metoden för att routern inte publikt för mer än att starta igång appen
  return {
    initialize: initialize
  };
});
