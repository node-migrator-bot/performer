define(['performer/blueprint'], function(Blueprint) {

  return {
    "text": {
      "tag": "input",
      "attributes": {
        "type": "text"
      }
    },
    "number": {
      "tag": "input",
      "attributes": {
        "type": "number"
      }
    },
    "email": {
      "tag": "input",
      "attributes": {
        "type": "email"
      }
    },
    "url": {
      "tag": "input",
      "attributes": {
        "type": "url"
      }
    },
    "tel": {
      "tag": "input",
      "attributes": {
        "type": "tel"
      }
    },
    "date": {
      "tag": "input",
      "attributes": {
        "type": "date"
      }
    },
    "password": {
      "tag": "input",
      "attributes": {
        "type": "password"
      }
    },
    "select": {
      "tag": "select",
      "attributes": {},
      "options": {}
    },
    "textarea": {
      "tag": "textarea",
      "attributes": {}
    },
    "hidden": {
      "tag": "input",
      "attributes": {
        "type": "hidden"
      }
    },
    "file": {
      "tag": "input",
      "attributes": {
        "type": "file"
      }
    },
    "checkbox": {
      "tag": "input",
      "attributes": {
        "type": "checkbox"
      }
    },
    "radio": {
      "tag": "input",
      "attributes": {
        "type": "radio"
      }
    },
    "button": {
      "tag": "input",
      "attributes": {
        "type": "button"
      }
    },
    "submit": {
      "tag": "input",
      "attributes": {
        "type": "submit"
      }
    }
  };

});
