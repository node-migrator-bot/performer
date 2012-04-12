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
       this.schema.constructor != Schema ||
       this.options.blueprint.constructor != Blueprint) {
      throw new Error("Cannot create Form without valid Schema and Blueprint.");
    } else {
      // Store blueprint and pipelines on root namespace.
      this.blueprint = this.options.blueprint;
      this.pipelines = this.options.pipelines;
    }

    // Invoke the form builder.
    this.build = function(options, traverse) {

      var output;

      // If no arguments pased, build the entire form.
      if(!options) {
        traverse = true;
      }

      var defaults = {
        "values": {},
        "node": null,
        "schema": null,
        "prefix_id": ''
      };
      options = _.extend(defaults,options);

      // If schema is not already an object, it should be a dot
      // notated string that can locate the schema using Schema#read
      if(!_.isObject(options.schema)) {
        options.schema = this.schema.read(options.node);
      }

      // Save values for this build.
      this.values = options.values;

      // Build the requested node.
      output = this.build_node(options, traverse);

      // Clear values.
      this.values = {};

      // Return output.
      return output;
    };

    // Build an individual form element.
    this.build_tag = function(options, pipeline) {

      var tag = new Tag(options);

      if(_.isArray(pipeline)) {
        pipeline = new Pipeline(pipeline);
      } else {
        console.log(pipeline);
        pipeline = this.piplines[pipeline];
      }

      pipeline.invoke(tag);

      return tag.read();
    };

    // Build a node from this form's schema.
    this.build_node = function(options, traverse) {

      // Save a reference to this so we can call it.
      var form = this,
          single_tag = false;

      // Prepare an empty node to contain all generated elements.
      var node = new Tag({
        "id": options.node,
        "schema": options.schema
      });

      // Iterate over fields in selected schema.
      _.each(options.schema,function(source, name) {

        var data, tag, recurse_with;

        // if name begins with a colon, this is metadata, skip it
        if(name[0] === ":") return;

        // If source is a string, we've hit a single tag, not a node.
        if(_.isString(source)) {
          source = options.schema;
          name = (options.node||'').split('.').pop();
        }

        // Apply blueprint (if any) to source.
        data = form.blueprint.impute(source);

        // If data is missing a "tag" key, it is a node.
        if(!data.tag) {
          // If flagged to, recurse through this node and generate it too.
          if(traverse === true && !single_tag) {
            recurse_with = merge({},options);
            recurse_with.node = name;
            recurse_with.schema = data;
            recurse_with.recursing = true;
            node.append(form.build_node(recurse_with, true));
          }
        } else {
          // Append a tag to the current node
          node.append(form.build_tag({
            "id": options.prefix_id+name,
            "name": name,
            "value": form.values[name],
            "schema": data
          }));
        }

      });

      // When recursion bottoms out, pass result through group pipeline
      // for final transformations (as long as it isn't a single tag)
      if(!single_tag) {

        //form.pipelines.group.invoke(node);
      }

      return node.read();
    };

  };


  return Form;

});

