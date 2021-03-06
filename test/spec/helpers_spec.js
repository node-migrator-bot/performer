define(['performer'], function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Helpers", {

    "should be defined": function() {
      expect(Performer.Helpers).toBeDefined();
    },

    "attr_html": {

      "should convert objects into html tag key-value pairs": function() {
        var data = {
          type: 'text',
          className: 'email'
        };
        var result = Performer.Helpers.attr_html(data);
        expect(result).toEqual('type="text" class="email"');
      },

      "should ignore value attribute when flagged to": function() {
        var data = {
          type: 'text',
          className: 'email',
          value: 'dude'
        };
        var result = Performer.Helpers.attr_html(data,true);
        expect(result).toEqual('type="text" class="email"');
      },

      "should ignore empty attributes": function() {
        var data = {
          type: 'text',
          className: 'email',
          attr1: [],
          attr2: '',
          attr3: null
        };
        var result = Performer.Helpers.attr_html(data);
        expect(result).toEqual('type="text" class="email"');
      }

    }
  });

});
