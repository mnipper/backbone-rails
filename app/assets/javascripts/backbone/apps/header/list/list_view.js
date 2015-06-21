App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  "use strict"

  List.Header = App.Views.CompositeView.extend({
    template: "header/list/templates/headers",
  });
});
