(function() {
  "use strict"

  window.App = new Marionette.Application();

  App.on("before:start", function(options) {
    App.currentUser = App.request("set:current:user", options.currentUser);
  });

  App.reqres.setHandler("get:current:user", function() {
    return App.currentUser;
  });

  App.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    footerRegion: "#footer-region"
  });

  App.addInitializer(function() {
    App.module("HeaderApp").start();
    App.module("FooterApp").start();
  });

  App.on('initialize:after', function() {
    if (Backbone.history) {
      Backbone.history.start();
    }
  });

})();
