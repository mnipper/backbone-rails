App.module("FooterApp", function(FooterApp, App, Backbone, Marionette, $, _) {
  "use strict"

  var API = {
    showFooter: function() {
      FooterApp.Show.Controller.showFooter();
    }
  }

});
