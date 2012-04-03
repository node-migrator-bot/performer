define(function() {

  var Schema = {};
  Schema = {

    "name": { "blueprint": "text" },

    "account": {
      "username": {
        "blueprint": "text",
        "attributes": {
          "placeholder": "placeholder text"
        }
      },
      "password": { "blueprint": "password" }
    },

    "contact": {
      "first": { "blueprint": "text" },
      "last": { "blueprint": "text" },
      "type": {
        "blueprint": "select",
        "options": {
          "admin": "Administrator",
          "user": "User"
        }
      },

      "details": {
        "age": { "blueprint": "number" },
        "birthdate": { "blueprint": "date" }
      }
    }
  };

  return Schema;

});
