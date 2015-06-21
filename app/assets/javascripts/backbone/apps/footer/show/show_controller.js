App.module("FooterApp.Show", function(Show, App, Backbone, Marionette, $, _) {
  "use strict"

  Show.Controller = {
    showFooter: function() {
      var currentUser = App.request("get:current:user");
      var footerView = this.getFooterView(currentUser);
      App.footerRegion.show(footerView);
    },
    getFooterView: function(currentUser) {
      return new Show.Footer({model: currentUser});
    }
  }
});
