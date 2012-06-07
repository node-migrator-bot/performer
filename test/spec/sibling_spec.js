define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Transformers.Sibling", {

    "setUp": function() {
      var data = {
        tag: 'input',
        attributes: {
          type: 'email',
          className: 'test'
        }
      };
      this.tag = new Performer.Tag('email', '', data);
    },

    "should be defined": function() {
      expect(Performer.Transformers.Sibling).toBeDefined();
    }

  });
});
