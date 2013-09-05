/*
 * client/js/modules/header/show/controller.js
 */

/* global app */

'use strict';

var views = require('./views');

var Controller = app.lib.Backbone.Marionette.Controller.extend({
  initialize: function () {
    var view = this.view = new views.HeaderView();

    this.show(view);
  }
});

// Public API
exports = module.exports = Controller;
