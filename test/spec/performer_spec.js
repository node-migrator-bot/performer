define(['performer'], function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer", {

    "should be defined": function() {
      expect(Performer).toBeDefined();
    }

  });
});
