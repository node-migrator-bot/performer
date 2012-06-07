// needs more testing
define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Tag", {

    "should be defined": function() {
      expect(Performer.Tag).toBeDefined();
    },

    "should allow a value to be written to it": function() {
      var tag = new Performer.Tag();
      tag.write('test');
      expect(tag.read()).toEqual('test');
    }

  });
});
