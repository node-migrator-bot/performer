// needs more testing
define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Transformer", {

    "should be defined": function() {
      expect(Performer.Transformer).toBeDefined();
    },

    "instances should run invoke with Performer.Helpers as context": function() {
      var helpers;
      var test = new Performer.Transformer(function(input){
        helpers = this;
      });
      test.invoke(new Performer.Tag());
      expect(helpers).toEqual(Performer.Helpers);
    }

  });
});
