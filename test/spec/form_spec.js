define(['performer'],function(Performer) {
  describe('Performer.Form', function() {

    var form;
    beforeEach(function(){
      var schema = {

        fields: {
          name: { format: 'text'},

          account: {
            fields: {
              username: { format: 'text' },
              password: { format: 'password' }
            }
          },

          contact: {
            fields: {
              first: { format: 'text' },
              last: { format: 'text' },

              details: {
                fields: {
                  age: { format: 'number' },
                  birthdate: { format: 'date' }
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
      form = new Performer.Form(schema,options);
    });

    it('should be defined', function() {
      expect(Performer.Form).toBeDefined();
    });

    it('should be able to build a tag from a schema',function(){
      var tag = form.tag('username');
      expect(tag).toEqual('<fieldset><input type="text"/></fieldset>');
    });

    it('should be able to build an entire form from a schema',function(){
      var output = form.build();
      expect(output).toEqual('<fieldset><input type="text"/></fieldset><fieldset><input type="password"/></fieldset>');
    });

  });
});