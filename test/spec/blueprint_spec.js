define(['performer'],function(Performer) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Blueprint", {

    "setUp": function() {
      this.blueprint = Performer.Blueprints.html5();
    },

    "should be defined": function() {
      expect(Performer).toBeDefined();
    },

    "should look up blueprints by name": function() {
      expect(this.blueprint.read('text')).toEqual({"tag":"input", attributes:{"type":"text"}});
    },

    "//should throw an error if no blueprint is found": function() {
      var self = this;
      var test = function() { self.blueprint.read('test'); };
      expect(test).toThrow(new Error("Unable to locate 'test' this.blueprint."));
    },

    "should allow adding blueprints": function() {
      this.blueprint.add('test', {"tag":"input"});
      expect(this.blueprint.read('test')).toEqual({"tag":'input'});
    },

    "should allow adding blueprints in bulk": function() {
      this.blueprint.add_many({
        "one": { "key": "value" },
        "two": { "key": "value"}
      });

      expect(this.blueprint.read("one")).toEqual({"key":"value"});
      expect(this.blueprint.read("two")).toEqual({"key":"value"});
    },

    "//should throw when adding a blueprint that already exists": function() {
      var self = this;
      var test = function() { self.blueprint.add('text', {"tag":'input'}); };
      expect(test).toThrow(new Error("Unable to add 'text' blueprint; it already exists."));
    },

    "should allow existing blueprints to be modified with new values": function() {
      this.blueprint.modify('select',{
        attributes: {
          extra: true
        }
      });
      expect(this.blueprint.read('select')).toEqual({tag:'select',attributes:{extra:true},options:{}});
    },

    "should allow existing blueprints to be replaced": function() {
      this.blueprint.replace('hidden', {"whatever":'test'});
      expect(this.blueprint.read('hidden')).toEqual({"whatever":'test'});
    },

    "//should allow removing a blueprint": function() {
      var self = this;
      var test = function() { self.blueprint.remove('hidden'); self.blueprint.read('hidden'); };
      expect(test).toThrow(new Error("Unable to locate 'hidden' blueprint."));
    },

    "//should throw when extending a blueprint that doesn\'t exist": function() {
      var self = this;
      var test = function() { self.blueprint.modify('notablueprint', {"tag":"new"}); };
      expect(test).toThrow(new Error("Unable to locate 'notablueprint' blueprint to modify."));
    },

    "should impute blueprints with outside data": function() {
      var data = { "blueprint": "email" };
      var result = {
        "tag": "input",
        "attributes": {
          "type": "email"
        }
      };
      expect(this.blueprint.impute(data)).toEqual(result);
    },

    "should impute nested blueprints": function() {
      var data = { "blueprint": "address_group" };
      var address_group = {
        "addr1": { "blueprint": "text" },
        "addr2": { "blueprint": "text" },
        "city": { "blueprint": "text" },
        "state": { "blueprint": "text" },
        "zip": { "blueprint": "text" }
      };
      this.blueprint.add('address_group',address_group);

      var result = {
        "addr1": { "blueprint": "text" },
        "addr2": { "blueprint": "text" },
        "city": { "blueprint": "text" },
        "state": { "blueprint": "text" },
        "zip": { "blueprint": "text" }
      };

      expect(this.blueprint.impute(data)).toEqual(result);
    }

  });

});
