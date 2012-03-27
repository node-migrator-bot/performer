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
      this.serialize = function() {
        return form.serialize(this);
      };

      // call initialize on instantiation
      this.initialize = function(){};
      this.initialize.apply(this, arguments);
    };

    // Allow this constructor to be extended and the methods within overridden.
    Tag.extend = klass.extend;

    return Tag;
});