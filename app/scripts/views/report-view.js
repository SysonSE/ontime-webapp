define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/report-template.html',
], function($, _, Backbone, viewTemplate) {
    'use strict';

    var ReportView = Backbone.View.extend({
        el: $('.main-container'),

        compiledTemplate: _.template(viewTemplate),

        initialize: function() {
          this.render();
        },

        render: function() {
          this.$el.html(this.compiledTemplate);
        },
    });

    return ReportView;
});
