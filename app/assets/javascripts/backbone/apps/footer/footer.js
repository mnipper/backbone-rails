App.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _) {
  "use strict"

  this.startWithParent = false;

  var API = {
    showFooter: function() {
      FooterApp.Show.Controller.showFooter();
    }
  }

  FooterApp.on('start', function() {
    API.showFooter();
  });
});
