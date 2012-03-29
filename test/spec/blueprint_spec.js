define(['performer'],function(Performer) {
  describe('Performer.Blueprint', function() {

    var blueprint;
    beforeEach(function() {
      blueprint = new Performer.Blueprint();
    });

    it('should be defined', function() {
      expect(Performer.Blueprint).toBeDefined();
    });

    it('should look up blueprints by name', function() {
      expect(blueprint.find('text')).toEqual({tag:'input', attributes:{type:'text'}});
    });

    it('should throw an error if no blueprint is found', function() {
      var test = function() { blueprint.find('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' blueprint."));
    });

    it('should allow adding blueprints', function() {
      blueprint.add('test', {tag:'input'});
      expect(blueprint.find('test')).toEqual({tag:'input'});
    });

    it('should raise an error when adding a blueprint that already exists', function() {
      var test = function() { blueprint.add('text', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' blueprint; it already exists."));
    });

    it('should allow existing blueprints to be extended with new values', function() {
      blueprint.extend('text', {tag:'new'});
      expect(blueprint.find('text')).toEqual({tag:'new', attributes:{type:'text'}});
    });

    it('should raise an error when trying to extend a blueprint that doesn\'t exist', function() {
      var test = function() { blueprint.extend('test', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to locate 'test' blueprint."));
    });

  });
});