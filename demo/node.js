var Performer = require('../build/performer');
var pd = require('pretty-data').pd;

var blueprint = Performer.Blueprints.html5;
blueprint.add('address',{
  _node: {
    addr1: { blueprint: 'text' },
    addr2: { blueprint: 'text' },
    city: { blueprint: 'text' },
    state: { blueprint: 'text' },
    zip: { blueprint: 'text' }
  }
});

var options = {
  blueprint: blueprint,
  pipeline: Performer.Pipelines.bootstrap
};


var schema = {

  root: {
    _node: {
      name: { blueprint: 'text' },

      account: {
        _node: {
          username: {
            blueprint: 'text',
            attributes: {
              placeholder: 'username'
            }
          },
          password: { blueprint: 'password' }
        }
      },

      contact: {
        _node: {
          first: { blueprint: 'text' },
          last: { blueprint: 'text' },
          address: { blueprint: 'address' },

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

var form = new Performer.Form(schema, {}, options);

console.log(pd.xml(form.build()));
