define(['performer'], function(Performer) {
  describe('Performer.Form', function() {

    var form,data
    beforeEach(function(){
      var schema = {

        root: {
          _fields: {
            name: { blueprint: 'text' },

            account: {
              _fields: {
                username: { blueprint: 'text' },
                password: { blueprint: 'password' }
              }
            },

            contact: {
              _fields: {
                first: { blueprint: 'text' },
                last: { blueprint: 'text' },

                details: {
                  _fields: {
                    age: { blueprint: 'number' },
                    birthdate: { blueprint: 'date' }
                  }
                }
              }
            }
          }
        }
      };
      var pipeline = new Performer.Pipeline(
                           [Performer.Transform.Serialize.standard],
                           [Performer.Transform.Wrap.fieldset]
                         );
      var blueprint = new Performer.Blueprint();

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
      expect(test).toThrow(new Error("Cannot create Form without a valid Pipeline."));
    });

    it('should throw on instantiation if invalid blueprint is supplied.',function() {
      var test = function() { new Performer.Form({},{blueprint:'notablueprint'}); };
      expect(test).toThrow(new Error("Cannot create Form without a valid Blueprint."));
    });

    it('should be able to build a tag from a schema',function(){
      var tag = form.build('root',false);

      expect(tag).toEqual('<fieldset><input type="text" id="name"/></fieldset>');
    });

    it('should be able to build an entire form from a schema',function(){
      var output = form.build('root',true);
      expect(output).toEqual('<fieldset><input type="text" id="name"/><input type="text" id="username"/><input type="password" id="password"/><input type="text" id="first"/><input type="text" id="last"/><input type="text" id="age"/><input type="text" id="birthdate"/></fieldset>');
    });

  });
});