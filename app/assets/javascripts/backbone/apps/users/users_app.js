App.module("UsersApp", function(UsersApp, App, Backbone, Marionette, $, _) {
  "use strict"
  
  UsersApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "users": "listUsers"
    }
  });

  var API = {
    listUsers: function() {
      console.log("listUsers");
    }
  }

  App.addInitializer(function() {
    return new UsersApp.Router({
      controller: API
    });
  });
});
