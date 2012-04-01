// TODO: get this fleshed out
define(['performer/blueprint'], function(Blueprint) {

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
        type: 'number'
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
        type: 'date'
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
      attributes: {},
      options: {}
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

  return new Blueprint(data);

});