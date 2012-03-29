define([

    'performer/core'

  ],
  function(_) {

    var Blueprint = function() {

      var data = {
        text: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        number: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        email: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        url: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        phone: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        date: {
          tag: 'input',
          attributes: {
            type: 'text'
          }
        },
        password: {
          tag: 'input',
          attributes: {
            type: 'password'
          }
        },
        select: {
          tag: 'select',
          attributes: {}
        },
        textarea: {
          tag: 'textarea',
          attributes: {}
        },
        hidden: {
          tag: 'input',
          attributes: {
            type: 'hidden'
          }
        },
        file: {
          tag: 'input',
          attributes: {
            type: 'file'
          }
        },
        checkbox: {
          tag: 'input',
          attributes: {
            type: 'checkbox'
          }
        },
        radio: {
          tag: 'input',
          attributes: {
            type: 'radio'
          }
        },
        button: {
          tag: 'button',
          attributes: {}
        },
        submit: {
          tag: 'submit',
          attributes: {}
        }
      };

      this.read = function(name) {
        var blueprint;

        if(!name) {
          return data;
        }
        if(!(blueprint = data[name])) {
          throw new Error("Unable to locate '"+name+"' blueprint.");
        }
        return blueprint;
      };

      this.add = function(name, attributes) {
        if(data[name]) {
          throw new Error("Unable to add '"+name+"' blueprint; it already exists.");
        }
        data[name] = attributes;
      };

      this.replace = function(name, attributes) {
        data[name] = attributes;
      };

      this.extend = function(name, attributes) {
        var blueprint;

        if((blueprint = this.read(name))) {
          return _.extend(data[name], attributes);
        }
      };

      this.impute = function(data) {
        var blueprint;

        // if data doesn't use a blueprint, return as is.
        if(!data.blueprint) {
          return data;
        }
        if((blueprint = this.read(data.blueprint))) {
          data.tag = blueprint.tag;
          data.attributes = _.extend(blueprint.attributes,data.attributes);
        }

        return data;
      };

    };

    return Blueprint;

});