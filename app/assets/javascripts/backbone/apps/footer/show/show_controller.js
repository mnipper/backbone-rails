App.module("FooterApp.show", function(Show, App, Backbone, Marionette, $, _) {
  "use strict"

  Show.Controller = {
    showFooter: function() {
      console.log('Hi from footer!');
    }
  }
});
