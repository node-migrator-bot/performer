// TODO: allow overriding

define([

  'performer/core',
  'performer/blueprint',
  'performer/schema',
  'performer/tag',
  'performer/pipeline',
  'performer/output'

],
function(_, Blueprint, Schema, Tag, Pipeline, Output) {

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

    // Build requested section and return the output.
    this.build = function(section, traverse, recurse) {
      var form = this,
        output = new Output(),
       context = (recurse ? section : this.schema.read(section)),
          tag;

      // If no arguments passed, build the whole form.
      if(!section && !traverse) {
        traverse= true;
      }

      // Iterate over fields in selected context.
      _.each(context._fields,function(data, id) {

        // TODO: this needs to operate on a copy?
        // merge with blueprint
        data = form.blueprint.impute(data);

        // If object has a "_fields" key it is a subsection
        if(data._fields) {
          // Only traverse subsections if we've asked to
          if(traverse === true) {
            output.append(form.build(data, true, data));
          }
        } else {
          // Build tag, pipeline it and append to output.
          tag = new Tag(id, data);

          // if tag has custom pipeline, use it
          if(data.pipeline) {
            data.pipeline(tag);
          } else {
            // otherwise use form's pipeline
            form.pipeline.tag(tag);
          }

          output.append(tag.read());
        }

      });

      // When recursion bottoms out, pass tags through group
      // pipeline for final transformations.
      if(!recurse) {
        // if section has custom pipeline, use it
        if(recurse.pipeline) {
          recurse.pipeline(output);
        } else {
          // otherwise use form's pipeline
          form.pipeline.group(output);
        }
      }

      // Return the fully built tag or tag-set.
      return output.read();
    };

  };

  return Form;

});

