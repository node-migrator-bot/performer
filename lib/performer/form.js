define([

    'performer/core',
    'performer/klass',
    'performer/formatter',
    'performer/output'

  ],
  function(_, klass, Formatter, Output) {

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

      // build supplied tag(s) and return the output
      this.build = function(tag, grouped) {
        var self = this;

        var output = new Output();

        if(tag.constructor == Array) {
          _.each(tag,function(tag) {
            output.append(self.build(tag, true));
          });
        }
        else {
          _.each(this.options.tag_pipeline,function(transform) {
            new transform().invoke(tag,tag);
          });
          output.append(tag.read());
        }

        // when recursion bottoms out, pass result through group pipeline
        if(!grouped) {
          _.each(this.options.group_pipeline,function(transform) {
            new transform().invoke(output,output);
          });
        }

        return output.read();
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