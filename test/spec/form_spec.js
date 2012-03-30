// TODO: add tests for pipeline overrides at the tag and section level
define(['performer'], function(Performer) {

  describe('Performer.Form', function() {

    var form,data;
    beforeEach(function(){
      var schema = {

        root: {
          _node: {
            name: { blueprint: 'text' },

            account: {
              _node: {
                username: { blueprint: 'text' },
                password: { blueprint: 'password' }
              }
            },

            contact: {
              _node: {
                first: { blueprint: 'text' },
                last: { blueprint: 'text' },

                details: {
                  _node: {
                    age: { blueprint: 'number' },
                    birthdate: { blueprint: 'date' }
                  }
                }
              }
            }
          }
        }
      };
      var options = {
        pipeline: new Performer.Pipeline(
                    [Performer.Transform.Serialize.standard,Performer.Transform.Wrap.div],
                    [Performer.Transform.Wrap.fieldset]
                  ),
        blueprint: Performer.Blueprints.html5
      };
      form = new Performer.Form(schema, options);
      window.test = form;
    });

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should throw on instantiation if invalid pipeline is supplied.',function() {
      var test = function() { new Performer.Form({},{pipeline:'notapipline'}); };
      expect(test).toThrow(new Error("Cannot create Form without a valid Blueprint and Pipeline."));
    });

    it('should throw on instantiation if invalid blueprint is supplied.',function() {
      var test = function() { new Performer.Form({},{blueprint:'notablueprint'}); };
      expect(test).toThrow(new Error("Cannot create Form without a valid Blueprint and Pipeline."));
    });

    it('should be able to build a tag from a schema',function(){
      var tag = form.build('root',false);
      expect(tag).toEqual('<fieldset><div><input type="text" id="name"/></div></fieldset>');
    });

    it('should be able to build an entire form from a schema',function(){
      var output = form.build();
      expect(output).toEqual('<fieldset><div><input type="text" id="name"/></div><fieldset><div><input type="text" id="username"/></div><div><input type="password" id="password"/></div></fieldset><fieldset><div><input type="text" id="first"/></div><div><input type="text" id="last"/></div><fieldset><div><input type="text" id="age"/></div><div><input type="text" id="birthdate"/></div></fieldset></fieldset></fieldset>');
    });

  });

});