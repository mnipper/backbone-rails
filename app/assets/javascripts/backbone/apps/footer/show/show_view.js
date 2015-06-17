App.module("FooterApp.Show", function(Show, App, Backbone, Marionette, $, _) {
  "use strict"

  Show.Footer = Backbone.Marionette.ItemView.extend({
    template: "footer/show/templates/show_footer"
  });
});
