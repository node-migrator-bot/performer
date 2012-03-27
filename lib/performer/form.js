define([

    'performer/core',
    'performer/klass',
    'performer/serializer',
    'performer/wrapper'

  ],
  function(_, klass, Serializer, Wrapper) {

    // The main entry point for generating form elements.  It holds a schema
    // to configure the form elements that will be generated and the settings
    // that determine their output format.
    var Form = function(schema, options) {

      // Prepare default settings.
      var defaults = {
        // The serializer determines how Tag objects will be converted to HTML.
        serializer: new Serializer.standard(),
        // The wrapper determines what (if any) markup will be wrapped around
        // serialized tags.
        wrapper: new Wrapper.standard()
      };

      // An object representing the form to be generated.
      this.schema = schema || (schema = {});

      // Override defaults.
      this.options = _.extend(defaults,options||{});

      // Configure form.
      this.serializer = this.options.serializer;
      this.wrapper = this.options.wrapper;

      // Serializes an element with the form's defined serializer.
      this.serialize = function(tag) {
        return this.serializer.invoke(tag);
      };

      // Wraps an element with the form's defined wrapper.
      this.wrap = function(tag) {
        return this.wrapper.invoke(tag);
      };

      // call initialize on instantiation
      this.initialize = function(){};
      this.initialize.apply(this, arguments);
    };

    // Allow this constructor to be extended and the methods within overridden.
    Form.extend = klass.extend;

    return Form;
});