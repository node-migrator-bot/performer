define([

  'performer/core',
  'performer/blueprint',
  'performer/schema',
  'performer/tag',
  'performer/pipeline'

],
function(_, Blueprint, Schema, Tag, Pipeline) {

  // The main entry point for generating form elements.  It holds a schema
  // to configure the tags that will be generated, and the settings that
  // determine their output format.
  var Form = function(schema, values, options) {
    this.schema = schema;
    this.options = options;
    this.values = values;

    // Abort on invalid Blueprint
    if(!this.schema ||
       !this.options.blueprint ||
       !this.options.pipeline ||
       this.schema.constructor != Schema ||
       this.options.blueprint.constructor != Blueprint ||
       this.options.pipeline.constructor != Pipeline) {
      throw new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline.");
    } else {
      this.blueprint = this.options.blueprint;
      this.pipeline = this.options.pipeline;
    }

    // Build requested node and return the output.
    this.build = function(context, traverse, recurse_from) {

      var section_id;

      // if no arguments pased, build the entire form
      if(!context && !traverse && !recurse_from) {
        context = false;
        traverse = true;
      }

      // If context is not an object, save it as the section_id
      // and locate the node to build within this form's schema.
      if(!_.isObject(context)) {
        section_id = context;
        context = this.schema.read(section_id);
      } else {
        section_id = recurse_from;
      }

      // The node receiving output is passed in during recursion.
      // For the initial run, a Tag instance must be created.
      var node = new Tag(section_id, '', context),
          form = this;

      // Iterate over fields in selected context.
      _.each(context,function(source, id) {

        var data, tag;

        // Apply blueprint (if any) to source
        data = form.blueprint.impute(source);

        if(!source.blueprint) {

          // If source is missing a "blueprint" key, it is a subsection.
          if(traverse === true) {
            node.append(form.build(source, true, id));
          }
        } else {
          tag = new Tag(id, '', data);
          // Process tag pipeline.
          form.pipeline.tag(tag);
        }

        // If tag was created during this loop, append it to output.
        if(tag) {
          node.append(tag.read());
        }
      });

      // When recursion bottoms out, pass tags through group pipeline
      // for final transformations.
      form.pipeline.group(node);

      // Return the fully transformed node.
      return node.read();
    };

  };

  return Form;

});

