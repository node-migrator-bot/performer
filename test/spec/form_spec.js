define(['performer'], function(Performer) {
  describe('Performer.Form', function() {

    var form,data
    beforeEach(function(){
      var schema = {

        root: {
          _fields: {
            name: { format: 'text' },

            account: {
              _fields: {
                username: { format: 'text' },
                password: { format: 'password' }
              }
            },

            contact: {
              _fields: {
                first: { format: 'text' },
                last: { format: 'text' },

                details: {
                  _fields: {
                    age: { format: 'number' },
                    birthdate: { format: 'date' }
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
      var type_system = new Performer.Type();

      var options = {
        pipeline: pipeline,
        type_system: type_system
      };
      form = new Performer.Form(schema, options);
      window.test = form;
    });

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should be able to build a tag from a schema',function(){
      var tag = form.build('root');

      expect(tag).toEqual('<fieldset><input type="text"/></fieldset>');
    });
/*
    it('should be able to build an entire form from a schema',function(){
      var output = form.build();
      expect(output).toEqual('<fieldset><input type="text"/></fieldset><fieldset><input type="password"/></fieldset>');
    });
*/
  });
});