App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  "use strict"

  List.Header = Backbone.Marionette.CompositeView.extend({
    template: "header/list/templates/headers",
  });
});
