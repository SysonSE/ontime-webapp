define([
  'jquery',
  'underscore',
  'backbone',
  // Använder Require.js text! plugin, så laddas rå text, dvs vår template
  'text!../../templates/login-template.html',
], function($, _, Backbone, loginTemplate){
  'use strict';

  // Vyn som hanterar logindelen.
  var LoginView = Backbone.View.extend({
    // Wrappern som templaten skall hamna i. Skall finnas definierad i HTML:en
    el: $('.main-container'),
    // Kompilerar templaten som skall renderas med underscores micro-templating.
    compiledLoginTemplate: _.template(loginTemplate),

    events: {
      'click .login-btn': 'login',
      'change .username' : 'setUsername',
      'change .password' : 'setPassword'
    },

    initialize: function(){
      this.render();
    },

    render: function () {
      // this.model.toJSON() är modellen man skickar in till vyn, se slutet av filen.
      var modelAsJSON = this.model.toJSON();
      // Skicka in modellen till templaten som sedan får ut username och password enligt självförklarande syntax i index.html
      var template = this.compiledLoginTemplate(modelAsJSON);
      // Insertar templaten till den valda containern som är definierad med el.
      this.$el.html(template);
    },

    setUsername: function(e){
      this.model.set({username: $('.username').val()});
    },

    setPassword: function(e){
      this.model.set({password: $('.password').val()});
    },

    login: function(event) {
      // preventDefault gör så att eventet(i detta fall knappen) inte submittar formuläret.
      event.preventDefault();

      var username = this.model.get('username');
      var password = this.model.get('password');

      var credentials = this.model.toJSON();

      $.ajax({
        url: 'http://ontime-service-staging.herokuapp.com/',
        dataType: 'jsonp',
        data: credentials,
        success: function (data) {
          console.log(data);
          if(data.error) {
            // $('.alert-error').text(data.error.text).show();
          } else {
            window.location.replace('#main');
          }
        }
      });
    }
  });

  return LoginView;
});
