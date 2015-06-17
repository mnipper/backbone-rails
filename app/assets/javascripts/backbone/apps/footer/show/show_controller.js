App.module("FooterApp.Show", function(Show, App, Backbone, Marionette, $, _) {
  "use strict"

  Show.Controller = {
    showFooter: function() {
      var footerView = this.getFooterView();
      App.footerRegion.show(footerView);
    },
    getFooterView: function() {
      return new Show.Footer();
    }
  }
});
