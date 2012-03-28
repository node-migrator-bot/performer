define(['performer'],function(Performer) {
  describe('Performer.Type', function() {

    var type;
    beforeEach(function() {
      type = new Performer.Type();
    });

    it('should be defined', function() {
      expect(Performer.Type).toBeDefined();
    });

    it('should look up types by name', function() {
      expect(type.find('text')).toEqual({tag:'input', attributes:{type:'text'}});
    });

    it('should throw an error if no type is found', function() {
      var test = function() { type.find('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' type."));
    });

    it('should allow adding types', function() {
      type.add('test', {tag:'input'});
      expect(type.find('test')).toEqual({tag:'input'});
    });

    it('should raise an error when adding a type that already exists', function() {
      var test = function() { type.add('text', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' type; it already exists."));
    });

    it('should allow existing types to be extended with new values', function() {
      type.extend('text', {tag:'new'});
      expect(type.find('text')).toEqual({tag:'new', attributes:{type:'text'}});
    });

    it('should raise an error when trying to extend a type that doesn\'t exist', function() {
      var test = function() { type.extend('test', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to locate 'test' type."));
    });

  });
});