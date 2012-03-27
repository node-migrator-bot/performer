define([

    'performer/core',
    'performer/klass',
    'performer/formatter'

  ],
  function(_, klass, Formatter) {

    // The main entry point for generating form elements.  It holds a schema
    // to configure the form elements that will be generated and the settings
    // that determine their output format.
    var Form = function(schema, options) {

      // Prepare default settings.
      var defaults = _.extend({},Formatter.standard);

      // An object representing the form to be generated.
      this.schema = schema || (schema = {});

      // Override defaults.
      this.options = _.extend(defaults,options||{});

      // build a supplied tag and return the output
      this.build = function(tag) {
        var output = "";

         _.each(this.options.tag_pipeline,function(transform) {
           output += transform.invoke(tag,tag);
         });

        return output;
      };

      // call initialize on instantiation
      this.initialize = function(){};
      this.initialize.apply(this, arguments);
    };

    // Allow this constructor to be extended and the methods within overridden.
    Form.extend = klass.extend;

    return Form;

});
/*
        if(!_.isArray(tag)) {
          tag = [tag];
        }

        // if the supplied tag is an array
        if(tag.length > 1) {
          var self = this;
          _.each(tag,function(tag) {
            output += self.generate(tag);
          });

          _.each(options.group_pipeline,function(transform) {

          });

        } else {*/