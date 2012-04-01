define(function() {

  var SpecHelper = {};
  SpecHelper.schema = {
    root: {
      _node: {
        name: { blueprint: 'text' },

        account: {
          _node: {
            username: {
              blueprint: 'text',
              attributes: {
                placeholder: 'placeholder text'
              }
            },
            password: { blueprint: 'password' }
          }
        },

        contact: {
          _node: {
            first: { blueprint: 'text' },
            last: { blueprint: 'text' },
            type: {
              blueprint: 'select',
              options: {
                admin: 'Administrator',
                user: 'User'
              }
            },

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

  return SpecHelper;

});