// TODO: add tests for pipeline overrides at the tag and section level
define(['performer','spec/helpers/schema'], function(Performer, test_schema) {

  describe('Performer.Form', function() {

    var form;
    beforeEach(function() {
      var schema = new Performer.Schema(test_schema);
      var blueprint = Performer.Blueprints.html5();
      var options = {
        pipeline: new Performer.Pipeline(
          [Performer.Transform.Serialize.standard,Performer.Transform.Wrap.div],
          [Performer.Transform.Wrap.fieldset]
        ),
        blueprint: blueprint
      };

      form = new Performer.Form(schema, {}, options);
      window.test = form;
    });

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should throw on instantiation if invalid pipeline is supplied.',function() {
      var test = function() { new Performer.Form({},{},{pipeline:'notapipline'}); };
      expect(test).toThrow(new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline."));
    });
    it('should throw on instantiation if invalid blueprint is supplied.',function() {
      var test = function() { new Performer.Form({},{},{blueprint:'notablueprint'}); };
      expect(test).toThrow(new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline."));
    });

    it('should build a section of form schema without traversing',function(){
      var result = form.build('account',false);
      expect(result).toEqual('<fieldset><div><input type="text" placeholder="placeholder text" id="username"/></div><div><input type="password" id="password"/></div></fieldset>');
    });
    it('should build a section of form schema with traversal',function() {
      var result = form.build('contact',true);
      expect(result).toEqual('<fieldset><div><input type="text" id="first"/></div><div><input type="text" id="last"/></div><div><select id="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age"/></div><div><input type="date" id="birthdate"/></div></fieldset></fieldset>');
    });
    it('should build entire form if no arguments are passed', function() {
      var result = form.build();
      expect(result).toEqual('<fieldset><div><input type="text" id="name"/></div><fieldset><div><input type="text" placeholder="placeholder text" id="username"/></div><div><input type="password" id="password"/></div></fieldset><fieldset><div><input type="text" id="first"/></div><div><input type="text" id="last"/></div><div><select id="type"><option value="admin">Administrator</option><option value="user">User</option></select></div><fieldset><div><input type="number" id="age"/></div><div><input type="date" id="birthdate"/></div></fieldset></fieldset></fieldset>');
    });

  });

});
