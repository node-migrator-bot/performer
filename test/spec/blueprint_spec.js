// TODO add tests for blueprint keys
define(['performer',''],function(Performer) {
  describe('Performer.Blueprint', function() {

    var blueprint;
    beforeEach(function() {
      blueprint = Performer.Blueprints.html5();
    });

    it('should be defined', function() {
      expect(Performer.Blueprint).toBeDefined();
    });

    it('should look up blueprints by name', function() {
      expect(blueprint.read('text')).toEqual({"tag":"input", attributes:{"type":"text"}});
    });

    it('should throw an error if no blueprint is found', function() {
      var test = function() { blueprint.read('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' blueprint."));
    });

    it('should allow adding blueprints', function() {
      blueprint.add('test', {"tag":"input"});
      expect(blueprint.read('test')).toEqual({"tag":'input'});
    });
/*
    it('should allow adding blueprints in bulk', function() {

      expect().toEqual(true);
    });
*/
    it('should throw when adding a blueprint that already exists', function() {
      var test = function() { blueprint.add('text', {"tag":'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' blueprint; it already exists."));
    });
/*
    it('should allow existing blueprints to be modified with new values', function() {

      expect().toEqual(true);
    });
*/
    it('should allow existing blueprints to be replaced', function() {
      blueprint.replace('hidden', {"whatever":'test'});
      expect(blueprint.read('hidden')).toEqual({"whatever":'test'});
    });

    it('should allow removing a blueprint', function() {
      var test = function() { blueprint.remove('hidden'); blueprint.read('hidden'); };
      expect(test).toThrow(new Error("Unable to locate 'hidden' blueprint."));
    });

    it('should throw when extending a blueprint that doesn\'t exist', function() {
      var test = function() { blueprint.modify('notablueprint', {"tag":"new"}); };
      expect(test).toThrow(new Error("Unable to locate 'notablueprint' blueprint to modify."));
    });

    it('should impute blueprints', function() {
      var data = { "blueprint": "email" };
      var result = {
        "blueprint": "email",
        "tag": "input",
        "attributes": {
          "type": "text"
        }
      };
      expect(blueprint.impute(data)).toEqual(result);
    });

    it('should impute nested blueprints', function() {
      var data = { "blueprint": "address" };
      var address = {
        "addr1": { "blueprint": "text" },
        "addr2": { "blueprint": "text" },
        "city": { "blueprint": "text" },
        "state": { "blueprint": "text" },
        "zip": { "blueprint": "text" }
      };
      blueprint.add('address',address);

      var result = {
        "blueprint": "address",
        "addr1": { "blueprint": "text" },
        "addr2": { "blueprint": "text" },
        "city": { "blueprint": "text" },
        "state": { "blueprint": "text" },
        "zip": { "blueprint": "text" }
      };

      expect(blueprint.impute(data)).toEqual(result);
    });

  });
});
