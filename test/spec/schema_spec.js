define(['performer','helpers/schema'], function(Performer, test_schema) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Schema", {

    "setUp": function(){
      this.schema = new Performer.Schema(test_schema);
    },

    "should be defined": function() {
      expect(Performer.Schema).toBeDefined();
    },

    "read should return the entire schema when no arguments are passed": function() {
      var value = this.schema.read();
      expect(value).toEqual(test_schema);
    },

    "read should traverse the schema with dot notation": function() {
      var value = this.schema.read('contact.details');
      expect(value).toEqual(test_schema['contact']['details']);
    },

    "should return a copy of the object requested, not the source": function() {
      var value = this.schema.read();
      value = {};
      expect(test_schema).not.toEqual(value);
    }

  });
});
