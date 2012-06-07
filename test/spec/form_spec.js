// TODO: add tests for pipeline overrides at the tag and section level
define(['performer','helpers/schema'], function(Performer, test_schema) {

  var expect = buster.assertions.expect;
  buster.testCase("Performer.Form", {

    "setUp": function() {
      this.schema = new Performer.Schema(test_schema);
      this.blueprint = Performer.Blueprints.html5();
      this.blueprint.replace('address', {
        addr1: { blueprint: 'text' },
        addr2: { blueprint: 'text' },
        city: { blueprint: 'text' },
        state: { blueprint: 'text' },
        zip: { blueprint: 'text' }
      });
      this.options = {
        pipelines: {
          tag: [Performer.Transformers.Wrap.div],
          set: [Performer.Transformers.Wrap.fieldset]
        },
        blueprint: this.blueprint,
        modifiers: {}
      };

      this.form = new Performer.Form(this.schema, this.options);
    },

    "should be defined": function() {
      expect(Performer.Form).toBeDefined();
    },

    "//should throw on instantiation if invalid blueprint is supplied.": function() {
      var self = this;
      var test = function() { new Performer.Form({},{blueprint:'notablueprint'}); };
      expect(test).toThrow(new Error("Cannot create Form without valid Schema and Blueprint."));
    },

    "should allow a tag modifier to alter a tag's data before generation": function(){
      this.options.modifiers.tag = function(data, name) {
        data.attributes.modified = 'yup';
        return data;
      };
      var test = new Performer.Form(this.schema, this.options);
      var result = test.build({node:'name'});
      expect(result).toEqual('<div><input type="text" modified="yup" id="name" name="name"/></div>');
    },

    "should be able to build a single form element without running a group pipeline": function(){
      var result = this.form.build({node:'name'});
      expect(result).toEqual('<div><input type="text" id="name" name="name"/></div>');
    },

    "should build a section of form schema without traversing": function() {
      var result = this.form.build({node:'account'});
      expect(result).toEqual('<fieldset><div><input type="text" placeholder="placeholder text" id="username" name="username"/></div><div><input type="password" id="password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="is_admin" name="is_admin"/></div></fieldset>');
    },

    "should allow a set modifier to alter a section\'s data before generation": function() {
      this.options.modifiers.set = function(data, name) {
        delete data.username;
        return data;
      };
      var test = new Performer.Form(this.schema, this.options);
      var result = test.build({node:'account'});
      expect(result).toEqual('<fieldset><div><input type="password" id="password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="is_admin" name="is_admin"/></div></fieldset>');
    },

    "should allow prefixing IDs during output": function() {
      var result = this.form.build({node:'account',prefix_id:'prefix_'});
      expect(result).toEqual('<fieldset><div><input type="text" placeholder="placeholder text" id="prefix_username" name="username"/></div><div><input type="password" id="prefix_password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="prefix_is_admin" name="is_admin"/></div></fieldset>');
    },

    "should build a section of form schema with traversal": function() {
      var result = this.form.build({node:'contact'},true);
      expect(result).toEqual('<fieldset><div><input type="text" id="first" name="first"/></div><div><input type="text" id="last" name="last"/></div><div><select id="type" name="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset></fieldset>');
    },

    "should build nested blueprints": function() {
      var result = this.form.build({node:'contact.details'},true);
      expect(result).toEqual('<fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset>');
    },

    "should build entire form if no arguments are passed": function() {
      var result = this.form.build();
      expect(result).toEqual('<fieldset><div><input type="text" id="name" name="name"/></div><fieldset><div><input type="text" placeholder="placeholder text" id="username" name="username"/></div><div><input type="password" id="password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="is_admin" name="is_admin"/></div></fieldset><fieldset><div><input type="text" id="first" name="first"/></div><div><input type="text" id="last" name="last"/></div><div><select id="type" name="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset></fieldset></fieldset>');
    }

  });

});
