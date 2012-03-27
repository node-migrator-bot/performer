define([

    'performer/core',
    'performer/klass',
    'performer/form'

  ],
  function(_, klass, Form) {

    var Tag = function(form, type, attributes) {

      // there should be an instanceof check here
      if(!form) {
        throw new Error("Tag must belong to an instance of Form.");
      }

      this.form = form;
      this.type = type;
      this.attributes = attributes || (attributes = {});
      this.output = "";

      this.write = function(str) {
        return (this.output = str);
      };

      this.read = function() {
        return this.output;
      };

    };

    // Allow this constructor to be extended and the methods within overridden.
    Tag.extend = klass.extend;

    return Tag;
});