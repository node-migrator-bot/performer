define(['performer','spec/spec_helper'], function(Performer, SpecHelper) {
  describe('Performer.Schema', function() {

    var schema;
    beforeEach(function(){
      schema = new Performer.Schema(SpecHelper.schema);
    });

    it('should be defined', function() {
      expect(Performer.Schema).toBeDefined();
    });

    it('read should return the entire schema when no arguments are passed', function() {
      var value = schema.read();
      expect(value).toEqual(SpecHelper.schema);
    });

    it('read should traverse the schema with dot notation', function() {
      var value = schema.read('contact.details');
      expect(value).toEqual(SpecHelper.schema.root._node.contact._node.details);
    });

    it('should return a copy of the object requested, not the source', function() {
      var value = schema.read();
      value = {};
      expect(SpecHelper.schema).toNotEqual(value);
    });

  });
});