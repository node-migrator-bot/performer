// TODO add tests for blueprint keys
define(['performer'],function(Performer) {
  describe('Performer.Blueprint', function() {

    var blueprint;
    beforeEach(function() {
      blueprint = Performer.Blueprints.html5;
    });

    it('should be defined', function() {
      expect(Performer.Blueprint).toBeDefined();
    });

    it('should look up blueprints by name', function() {
      expect(blueprint.read('text')).toEqual({tag:'input', attributes:{type:'text'}});
    });

    it('should throw an error if no blueprint is found', function() {
      var test = function() { blueprint.read('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' blueprint."));
    });

    it('should allow adding blueprints', function() {
      blueprint.add('test', {tag:'input'});
      expect(blueprint.read('test')).toEqual({tag:'input'});
    });

    it('should throw when adding a blueprint that already exists', function() {
      var test = function() { blueprint.add('text', {tag:'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' blueprint; it already exists."));
    });

    it('should allow existing blueprints to be extended with new values', function() {
      blueprint.extend('select', {tag:'new'});
      expect(blueprint.read('select')).toEqual({tag:'new',attributes:{}});
    });

    it('should allow removing a blueprint', function() {
      var test = function() { blueprint.remove('select'); blueprint.read('select'); };
      expect(test).toThrow(new Error("Unable to locate 'select' blueprint."));
    });

    it('should throw when extending a blueprint that doesn\'t exist', function() {
      var test = function() { blueprint.extend('notablueprint', {tag:'new'}); };
      expect(test).toThrow(new Error("Unable to locate 'notablueprint' blueprint to extend."));
    });

    it('should impute blueprints', function(){
      var data = { blueprint: 'email' };
      var result = {
        blueprint: 'email',
        tag: 'input',
        attributes: {
          type: 'text'
        }
      };
      expect(blueprint.impute(data)).toEqual(result);
    });

    it('should impute nested blueprints', function(){
      var data = { blueprint: 'address' };
      var address = {
        _fields: {
          addr1: { blueprint: 'text' },
          addr2: { blueprint: 'text' },
          city: { blueprint: 'text' },
          state: { blueprint: 'text' },
          zip: { blueprint: 'text' }
        }
      };
      blueprint.add('address',address);

      var result = {
        blueprint: 'address',
        _fields: {
          addr1: { blueprint: 'text' },
          addr2: { blueprint: 'text' },
          city: { blueprint: 'text' },
          state: { blueprint: 'text' },
          zip: { blueprint: 'text' }
        }
      };

      expect(blueprint.impute(data)).toEqual(result);
    });

  });
});