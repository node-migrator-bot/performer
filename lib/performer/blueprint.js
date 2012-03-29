define([

    'performer/core'

  ],
  function(_) {

    var Blueprint = function() {

      this.data = {
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
        var blueprint;
        if(!(blueprint = this.data[name])) {
          throw new Error("Unable to locate '"+name+"' blueprint.");
        }
        return blueprint;
      };

      this.add = function(name, attributes) {
        if(this.data[name]) {
          throw new Error("Unable to add '"+name+"' blueprint; it already exists.");
        }
        this.data[name] = attributes;
      };

      this.replace = function(name, attributes) {
        this.data[name] = attributes;
      };

      this.extend = function(name, attributes) {
        var blueprint;
        if((blueprint = this.find(name))) {
          _.extend(this.data[name], attributes);
        }
      };

    };

    return Blueprint;

});