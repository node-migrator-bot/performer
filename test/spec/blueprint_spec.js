define(['performer'],function(Performer) {
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

    it('should allow adding blueprints in bulk', function() {
      blueprint.add_many({
        "one": { "key": "value" },
        "two": { "key": "value"}
      });

      expect(blueprint.read("one")).toEqual({"key":"value"});
      expect(blueprint.read("two")).toEqual({"key":"value"});
    });

    it('should throw when adding a blueprint that already exists', function() {
      var test = function() { blueprint.add('text', {"tag":'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' blueprint; it already exists."));
    });

    it('should allow existing blueprints to be modified with new values', function() {
      blueprint.modify('select',{
        attributes: {
          extra: true
        }
      });
      expect(blueprint.read('select')).toEqual({tag:'select',attributes:{extra:true},options:{}});
    });

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

    it('should impute blueprints with outside data', function() {
      var data = { "blueprint": "email" };
      var result = {
        "tag": "input",
        "attributes": {
          "type": "email"
        }
      };
      expect(blueprint.impute(data)).toEqual(result);
    });

    it('should impute nested blueprints', function() {
      var data = { "blueprint": "address_group" };
      var address_group = {
        "addr1": { "blueprint": "text" },
        "addr2": { "blueprint": "text" },
        "city": { "blueprint": "text" },
        "state": { "blueprint": "text" },
        "zip": { "blueprint": "text" }
      };
      blueprint.add('address_group',address_group);

      var result = {
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
