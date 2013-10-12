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
  'backbone'
], function (Backbone) {

  // Routern har hand om navigeringen runt på sidan. Den tar bort/skapar nödvändiga vyer.
  var ApplicationRouter = Backbone.Router.extend({

    routes: {
      "": "showLogin",
    },

    showLogin: function() {
      this.loginView = new LoginView({model: new Credentials()});
    }

  });

  // Modellen som håller login-data.
  var Credentials = Backbone.Model.extend({
    defaults: {
      user: '',
      password: ''
    }
  });

  // Vyn som hanterar logindelen.
  var LoginView = Backbone.View.extend({
    // Wrappern som templaten skall hamna i. Skall finnas definierad i HTML:en
    el: $('.login-container'),
    // Templaten som skall renderas. Ligger definierat som ett script/template längst ner i index.html.
    loginTemplate: _.template($('#login-template').html()),

    events: {
      "click .btn": "login"
    },

    initialize: function(){
      this.render();
    },

    render: function () {
        // this.model.toJSON() är modellen man skickar in till vyn, se slutet av filen.
        var modelAsJSON = this.model.toJSON();
        // Skicka in modellen till templaten som sedan får ut user och password enligt självförklarande syntax i index.html
        var template = this.loginTemplate(modelAsJSON);
        // Insertar templaten till den valda containern som är definierad med el.
        this.$el.html(template);
    },

    login: function(event) {
      // preventDefault gör så att eventet(i detta fall knappen) inte submittar någonting
      event.preventDefault();

      var user = this.model.get('user');
      var password = this.model.get('password');
      // Detta funkar inte riktigt. Den uppdaterar inte modellen när man skriver något. Ändrar man defaults funkar det dock.
      alert("Loggat in med " + user + " och password " + password);

      /**var url = '../login';
      var formValues = this.model.toJSON();
      $.ajax({
            url: url,
            type: 'POST',
            dataType: "json",
            data: formValues,
            success: function (data) {
                console.log(["Login request details: ", data]);

                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            }
        });**/
    }
  });

  // Initialiserar routern som i sin tur skapar vyn och sen rullar appen.
  var router = new ApplicationRouter($('#'));
  // Lyssnar på router-events, dvs navigering. Gör så att man kan trycka på t.ex. bakåt-knappen. Måste initialiseras efter routern.
  Backbone.history.start();
});

