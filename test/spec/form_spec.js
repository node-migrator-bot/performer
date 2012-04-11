// TODO: add tests for pipeline overrides at the tag and section level
define(['performer','spec/helpers/schema'], function(Performer, test_schema) {

  describe('Performer.Form', function() {

    var form;
    beforeEach(function() {
      var schema = new Performer.Schema(test_schema);
      var pipeline =  new Performer.Pipeline(
                            [Performer.Transform.Serialize.standard,Performer.Transform.Wrap.div],
                            [Performer.Transform.Wrap.fieldset]
                          );
      var blueprint = Performer.Blueprints.html5();
      blueprint.replace('address',{
        addr1: { blueprint: 'text' },
        addr2: { blueprint: 'text' },
        city: { blueprint: 'text' },
        state: { blueprint: 'text' },
        zip: { blueprint: 'text' }
      });
      var options = {
        pipeline: pipeline,
        blueprint: blueprint
      };

      form = new Performer.Form(schema, options);
      window.test = form;
    });

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should throw on instantiation if invalid pipeline is supplied.',function() {
      var test = function() { new Performer.Form({},{pipeline:'notapipline'}); };
      expect(test).toThrow(new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline."));
    });

    it('should throw on instantiation if invalid blueprint is supplied.',function() {
      var test = function() { new Performer.Form({},{blueprint:'notablueprint'}); };
      expect(test).toThrow(new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline."));
    });

    it('should be able to build a single form element without running a group pipeline',function(){
      var result = form.build({},'name');
      expect(result).toEqual('<div><input type="text" id="name" name="name"/></div>');
    });

    it('should build a section of form schema without traversing',function() {
      var result = form.build({},'account');
      expect(result).toEqual('<fieldset><div><input type="text" placeholder="placeholder text" id="username" name="username"/></div><div><input type="password" id="password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="is_admin" name="is_admin"/></div></fieldset>');
    });

    it('should allow prefixing IDs during output',function() {
      var result = form.build({},'account','prefix_');
      expect(result).toEqual('<fieldset><div><input type="text" placeholder="placeholder text" id="prefix_username" name="username"/></div><div><input type="password" id="prefix_password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="prefix_is_admin" name="is_admin"/></div></fieldset>');
    });

    it('should build a section of form schema with traversal',function() {
      var result = form.build({},'contact','',true);
      expect(result).toEqual('<fieldset><div><input type="text" id="first" name="first"/></div><div><input type="text" id="last" name="last"/></div><div><select id="type" name="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset></fieldset>');
    });

    it('should build nested blueprints',function() {
      var result = form.build({},'contact.details','',true);
      expect(result).toEqual('<fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset>');
    });

    it('should build entire form if no arguments are passed', function() {
      var result = form.build();
      expect(result).toEqual('<fieldset><div><input type="text" id="name" name="name"/></div><fieldset><div><input type="text" placeholder="placeholder text" id="username" name="username"/></div><div><input type="password" id="password" name="password"/></div><div><input type="hidden" name="is_admin" value="false"/><input type="checkbox" id="is_admin" name="is_admin"/></div></fieldset><fieldset><div><input type="text" id="first" name="first"/></div><div><input type="text" id="last" name="last"/></div><div><select id="type" name="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age" name="age"/></div><div><input type="date" id="birthdate" name="birthdate"/></div><fieldset><div><input type="text" id="addr1" name="addr1"/></div><div><input type="text" id="addr2" name="addr2"/></div><div><input type="text" id="city" name="city"/></div><div><input type="text" id="state" name="state"/></div><div><input type="text" id="zip" name="zip"/></div></fieldset></fieldset></fieldset></fieldset>');
    });

  });

});
