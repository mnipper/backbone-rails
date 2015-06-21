App.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  "use strict"

  _.extend(Marionette.View.prototype, {
    templateHelpers: function() {
      return {
        currentUser: function() { return App.request("get:current:user").toJSON(); }
      }
    }
  });
});
