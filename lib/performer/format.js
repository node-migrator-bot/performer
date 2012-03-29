define([

    'performer/core'

  ],
  function(_) {

    var Format = function() {

      var map = {
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
        var format;
        if(!(format = map[name])) {
          throw new Error("Unable to locate '"+name+"' format.");
        }
        return format;
      };

      this.add = function(name, attributes) {
        if(map[name]) {
          throw new Error("Unable to add '"+name+"' format; it already exists.");
        }
        map[name] = attributes;
      };

      this.replace = function(name, attributes) {
        map[name] = attributes;
      };

      this.extend = function(name, attributes) {
        var format;
        if((format = this.find(name))) {
          _.extend(map[name], attributes);
        }
      };

    };

    return Format;

});