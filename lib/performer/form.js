define([

    'performer/core',
    'performer/klass',
    'performer/type',
    'performer/schema',
    'performer/tag',
    'performer/pipeline',
    'performer/output'

  ],
  function(_, klass, Type, Schema, Tag, Pipeline, Output) {

    // The main entry point for generating form elements.  It holds a schema
    // to configure the tags that will be generated, and the settings that
    // determine their output format.
    var Form = function(schema, options) {

      // Prepare default settings.
      var defaults = {
        pipeline: new Pipeline(),
        type_system: new Type()
      };

      // Instantiate a schema.
      this.schema = new Schema(schema);

      // Override defaults.
      this.options = _.extend(defaults, options||{});

      // Build requested section and return the output.
      this.build = function(section, traverse, recursing) {

        var form = this,
          output = new Output(),
         context = (recursing ? section : this.schema.read(section)),
            tag;

        // If no arguments passed, build the whole form.
        if(!section && !traverse) {
          traverse= true;
        }

        // Iterate over selected context.
        _.each(context._fields,function(data, key) {

          // If object has a "_fields" key it is a subsection
          if(data._fields) {
            // Only traverse subsections if we've asked to
            if(traverse === true) {
              output.append(form.build(data, true, true));
            }
          } else {
            // Build tag, pipeline it and append to output.
            tag = new Tag(key, data, form.options.type_system);
            form.options.pipeline.tag(tag);
            output.append(tag.read());
          }

        });

        // When recursion bottoms out, pass tags through group
        // pipeline for final transformation.
        if(!recursing) {
          form.options.pipeline.group(output);
        }

        // Return the fully built tag or tag-set.
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