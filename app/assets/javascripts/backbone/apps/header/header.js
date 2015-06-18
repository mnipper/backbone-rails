App.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  "use strict"

  this.startWithParent = false;

  var API = {
    listHeader: function() {
      HeaderApp.List.Controller.listHeader();
    }
  }

  HeaderApp.on("start", function() {
    API.listHeader();
  });
});
