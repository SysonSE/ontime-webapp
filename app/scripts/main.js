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
  // Vettefan vad detta är? Inkluderades i scaffoldingen
  Backbone.history.start();

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
    // Templaten som skall renderas. Ligger definierat som ett script längst ner på sidan
    loginTemplate: _.template($('#login-template').html()),

    events: {
      // TODO byt ut mot css klass
      "click #loginbutton": "login"
    },

    initialize: function(){
      this.render();
    },

    render: function () {
        // Insertar templaten till den valda containern som är definierad med el.
        // this.model.toJSON() är modellen man skickar in till vyn, se slutet av filen.
        // Templaten får sedan ut user och password enligt självförklarande syntax i index.html
        this.$el.html(this.loginTemplate(this.model.toJSON()));
    },

    login: function() {
      var user = this.model.get('user');
      var password = this.model.get('password');
      // Detta funkar inte riktigt. Den uppdaterar inte modellen när man skriver något. Ändrar man defaults funkar det dock.
      alert("Loggat in med " + user + " och password " + password);
      return false;
    }
  });

  window.LoginView = new LoginView({model: new Credentials()});
});

