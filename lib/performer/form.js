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
      this.options = _.extend(defaults,options||{});

      // Build supplied tag(s) and return the output.
      this.tag = function(tag, root) {
        var self = this,
             key,
            data,
              id;

        // if no root path defined, initalize
        root = root||[];

        // If tag not an id, recurse each one through the builder.
        if(tag.constructor != String) {
          _.each(tag,function(tag) {
            // Append the result of each tag build to the overall output.
            output.append(self.tag(tag, true));
          });
        }
        else {

          // If we haven't been passed a Tag instance proper, we've been given
          // a key to locate in the schema.
          if(tag.constructor != Tag)
          {
            // copy the current root path
            key = root.slice(0);
            // push current tag to path
            key.push(tag);

            // Locate key in schema and generate Tag instance with type system.
            data = schema.find_tag(key);
            tag = new Tag(key,data,this.options.type_system);
          }

          // Send tag through the pipeline.
          _.each(this.options.tag_pipeline,function(transform) {
            new transform().invoke(tag,tag);
          });

          // Append the pipeline-processed tag to the overall results.
          output.append(tag.read());
        }

        // When recursion bottoms out, pass the pipelined tag-set
        // through the group_pipeline for final transformations
        if(_.isEmpty(root)) {

        }

        // Return the fully built tag or tag-set.
        return output.read();
      };

      // Build entire form in one go.
      this.build = function(schema, root) {
        var self = this,
          output = new Output();

        // If no root path defined, initalize as empty array.
        root = root||[];


        // If no schema defined, use the one assigned to this form.
        schema = (schema||this.schema.read());

        // Iterate over the current schema, building each field within.
        _.each(schema.fields,function(data,key) {

          // if this section has a 'fields' key, it is a subschema
          if(data.fields) {
            self.build(data,root.push(key));
          } else {
            self.tag(data,root);
          }
        });
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