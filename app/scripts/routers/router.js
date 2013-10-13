define([
  'jquery',
  'underscore',
  'backbone',
  '../views/login-view',
  '../models/credentials'
], function($, _, Backbone, LoginView, Credentials){

  // Routern har hand om navigeringen runt på sidan. Den tar bort/skapar nödvändiga vyer.
  var ApplicationRouter = Backbone.Router.extend({
    routes: {
      "": "showLogin",
      "main": "showMain"
    },

    showLogin: function() {
      var credentials = new Credentials();
      console.log(credentials);
      this.loginView = new LoginView({model: credentials});
    },

    showMain: function() {
      if (this.loginView) {
        this.loginView.remove();
      }
      //this.navigationView = new NavigationView();
      //this.timeReportView = new TimeReportView();
    }

  });

  var initialize = function(){
    console.log('HELLLOOOO');
    // Initialiserar routern som i sin tur skapar vyn och sen rullar appen.
    var router = new ApplicationRouter($('#'));
    // Lyssnar på router-events, dvs navigering. Gör så att man kan trycka på t.ex. bakåt-knappen. Måste initialiseras efter routern.
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
