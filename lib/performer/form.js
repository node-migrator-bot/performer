// TODO: allow overriding

define([

  'performer/core',
  'performer/blueprint',
  'performer/schema',
  'performer/tag',
  'performer/pipeline',
  'performer/merge'

],
function(_, Blueprint, Schema, Tag, Pipeline, merge) {

  // The main entry point for generating form elements.  It holds a schema
  // to configure the tags that will be generated, and the settings that
  // determine their output format.
  var Form = function(schema, options) {
    this.schema = new Schema(schema);
    this.options = options;

    // Abort on invalid Blueprint
    if(!this.options.blueprint ||
       !this.options.pipeline ||
       this.options.blueprint.constructor != Blueprint ||
       this.options.pipeline.constructor != Pipeline) {
      throw new Error("Cannot create Form without a valid Blueprint and Pipeline.");
    } else {
      this.blueprint = this.options.blueprint;
      this.pipeline = this.options.pipeline;
    }

    // Build requested node and return the output.
    this.build = function(context, traverse, recurse_from) {

      var section_id;

      // if no arguments pased, build the entire form
      if(!context && !traverse && !recurse_from) {
        context = 'root';
        traverse = true;
      }

      // If context is a string, save it as the section_id and
      // locate the node to build within this form's schema.
      if(_.isString(context)) {
        section_id = context;
        context = this.schema.read(section_id);
      } else {
        section_id = recurse_from;
      }

      // The node receiving output is passed in during recursion.
      // For the initial run, a Tag instance must be created.
      var node = new Tag(section_id, context),
          form = this;

      // Iterate over fields in selected context.
      _.each(context._node,function(source, id) {

        // get blueprint (if any), merge and create tag
        var data = form.blueprint.impute(source),
             tag = new Tag(id, data);

        // If object has a "_node" key it is a subsection
        if(data._node) {
          // Only traverse it if we've asked to
          if(traverse === true) {
            node.append(form.build(data, true, id));
          }
        } else {
          form.pipeline.tag(tag);
        }

        node.append(tag.read());
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

