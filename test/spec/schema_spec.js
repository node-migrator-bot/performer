define(['performer','spec/helpers/schema'], function(Performer, test_schema) {
  describe('Performer.Schema', function() {

    var schema;
    beforeEach(function(){
      schema = new Performer.Schema(test_schema);
      window.dude = schema;
    });

    it('should be defined', function() {
      expect(Performer.Schema).toBeDefined();
    });

    it('read should return the entire schema when no arguments are passed', function() {
      var value = schema.read();
      expect(value).toEqual(test_schema);
    });

    it('read should traverse the schema with dot notation', function() {
      var value = schema.read('contact.details');
      expect(value).toEqual(test_schema['contact']['details']);
    });

    it('should return a copy of the object requested, not the source', function() {
      var value = schema.read();
      value = {};
      expect(test_schema).toNotEqual(value);
    });

  });
});
