define(['performer'],function(Performer) {
  describe('Performer.Schema', function() {

    var schema, data;
    beforeEach(function(){
      data = {

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
      schema = new Performer.Schema(data);
    });

    it('should be defined', function() {
      expect(Performer.Schema).toBeDefined();
    });

    it('lookup should return the entire schema when no arguments are passed', function() {
      var value = schema.read();
      expect(value).toEqual(data);
    });

    it('lookup should traverse the schema with dot notation', function() {
      var value = schema.read('contact.details');
      expect(value).toEqual(data.fields.contact.fields.details);
    });

  });
});