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

    this.schema = schema;
    this.options = options;

    // Abort on invalid constructor params.
    if(!this.schema ||
       !this.options.blueprint ||
       !this.options.pipeline ||
       this.schema.constructor != Schema ||
       this.options.blueprint.constructor != Blueprint ||
       this.options.pipeline.constructor != Pipeline) {
      throw new Error("Cannot create Form without valid Schema, Blueprint, and Pipeline.");
    } else {
      // Store pipeline and blueprint on root namespace.
      this.blueprint = this.options.blueprint;
      this.pipeline = this.options.pipeline;
    }

    // Invoke the form builder.
    this.build = function(schema, values, prefix_id, traverse) {

      var section, output;

      // If no arguments pased, build the entire form.
      if(!schema && !traverse) {
        schema = false; // Schema will be loaded below.
        traverse = true;
      }

      // If schema is not already an object, it should be a dot
      // notated string that can locate the schema using Schema#read
      if(!_.isObject(schema)) {
        section = schema;
        schema = this.schema.read(section);
      }

      // Save values for this build.
      this.values = values||{};

      // Build the requested node.
      output = this.build_node(prefix_id, section, schema, traverse);

      // Clear values.
      this.values = {};

      // Return output.
      return output;
    };

    // Build an individual form element.
    this.build_tag = function(id, name, value, schema) {

      var tag = new Tag(id, name, value, schema);

      // if tag has a pipeline override, use it
      if(schema.pipeline) {
        schema.pipeline.tag(tag);
      } else {
        // otherwise, use form pipeline
        this.pipeline.tag(tag);
      }

      return tag.read();
    };

    // Build a node from this form's schema.
    this.build_node = function(prefix_id, section, schema, traverse) {

      // Save a reference to this so we can call it.
      var form = this,
          single_tag = false;

      // Prepare an empty node to contain all generated elements.
      var node = new Tag(section, '', '', schema);

      prefix_id = prefix_id||'';

      // Iterate over fields in selected schema.
      _.each(schema,function(source, name) {

        // If source is a string, we've hit a single tag, not a node.
        if(_.isString(source)) {
          single_tag = true;
          source = schema;
          name = section.split('.').pop();
        }

        // Apply blueprint (if any) to source.
        var data = form.blueprint.impute(source),
             tag;

        // If data is missing a "tag" key, it is a node.
        if(!data.tag) {
          // If flagged to, recurse through this node and generate it too.
          if(traverse === true && !single_tag) {
            node.append(form.build_node(prefix_id, name, data, true));
          }
        } else {
          // Append a tag to the current node
          node.append(form.build_tag(prefix_id+name, name, form.values[name], data));
        }

      });

      // When recursion bottoms out, pass result through group pipeline
      // for final transformations (as long as it isn't a single tag)
      if(!single_tag) {
        form.pipeline.group(node);
      }

      return node.read();
    };

  };


  return Form;

});

