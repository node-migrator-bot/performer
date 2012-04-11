define(function() {

  var Schema = {};
  Schema = {

    "name": { "blueprint": "text" },

    "account": {
      ":legend": "Account Details",
      "username": {
        "blueprint": "text",
        "attributes": {
          "placeholder": "placeholder text"
        }
      },
      "password": { "blueprint": "password" },
      "is_admin": { "blueprint": "checkbox" }
    },

    "contact": {
      ":legend": "Contact Information",
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
        ":legend": "Details",
        "age": { "blueprint": "number" },
        "birthdate": { "blueprint": "date" },
        "address": { "blueprint": "address" }
      }
    }

  };

  return Schema;

});
