App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  "use strict"

  Entities.User = Entities.Model.extend({});
  Entities.UsersCollection = Entities.Collection.extend({model: Entities.User});
  
  var API = {
    setCurrentUser: function(currentUser) {
      return new Entities.User(currentUser);
    }
  }

  App.reqres.setHandler("set:current:user", function(currentUser) {
    return API.setCurrentUser(currentUser);
  });
});
