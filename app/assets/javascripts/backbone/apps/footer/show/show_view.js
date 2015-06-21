App.module("FooterApp.Show", function(Show, App, Backbone, Marionette, $, _) {
  "use strict"

  Show.Footer = App.Views.ItemView.extend({
    template: "footer/show/templates/show_footer"
  });

  var modelEvents = {
    "change": "render"
  }
});
