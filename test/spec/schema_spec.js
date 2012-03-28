define(['performer'], function(Performer) {
  describe('Performer.Schema', function() {

    var schema, data;
    beforeEach(function(){
      data = {

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
      expect(value).toEqual(data.root._fields.contact._fields.details);
    });

  });
});