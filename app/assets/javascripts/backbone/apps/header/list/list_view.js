App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.Header = Backbone.Marionette.ItemView.extend({
    template: "header/list/templates/list_header"
  });
});
