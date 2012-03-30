define(['performer'], function(Performer) {
  describe('Performer.Schema', function() {

    var schema, data;
    beforeEach(function(){
      data = {

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
      schema = new Performer.Schema(data);
    });

    it('should be defined', function() {
      expect(Performer.Schema).toBeDefined();
    });

    it('read should return the entire schema when no arguments are passed', function() {
      var value = schema.read();
      expect(value).toEqual(data);
    });

    it('read should traverse the schema with dot notation', function() {
      var value = schema.read('contact.details');
      expect(value).toEqual(data.root._node.contact._node.details);
    });

    it('should return a copy of the object requested, not the source', function() {
      var value = schema.read();
      value = {};
      expect(data).toNotEqual(value);
    });

  });
});