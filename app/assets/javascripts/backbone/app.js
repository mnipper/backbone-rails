(function() {
  "use strict"

  window.App = new Marionette.Application();

  App.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    footerRegion: "#footer-region"
  });

  App.addInitializer(function() {
    App.module("FooterApp").start();
  });

  App.on('initialize:after', function() {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

})();
