define([

    'performer/core'

  ],
  function(_) {

    var Type = function() {

      this.map = {
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

      this.find = function(name) {
        var type;
        if(!(type = this.map[name])) {
          throw new Error("Unable to locate '"+name+"' type.");
        }
        return type;
      };

      this.add = function(name, attributes) {
        if(this.map[name]) {
          throw new Error("Unable to add '"+name+"' type; it already exists.");
        }
        this.map[name] = attributes;
      };

      this.extend = function(name, attributes) {
        var type;
        if((type = this.find(name))) {
          _.extend(this.map[name],attributes);
        }
      };

    };

    return Type;

});