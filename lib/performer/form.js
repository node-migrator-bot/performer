define([

  'performer/core',
  'performer/merge'

],
function(_, merge) {

  return function(self) {

    // The main entry point for generating form elements.  It holds a schema
    // to configure the tags that will be generated, and the settings that
    // determine their output format.
    var Form = function(schema, options) {

      this.performer = self;
      this.schema = schema;
      this.options = options;

      // Abort on invalid constructor params.
      if(!this.schema ||
         !this.options.blueprint ||
         this.schema.constructor != self.Schema ||
         this.options.blueprint.constructor != self.Blueprint) {
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

        return output;
      };

      // Process an input with a pipeline
      this.pipeline = function(input, pipeline) {
        // If pipeline is an array of methods, make a Pipeline instance
        if(_.isArray(pipeline)) {
          pipeline = new self.Pipeline(pipeline);
        } else {
          pipeline = this.pipelines[pipeline];
        }
        // Process input
        pipeline.invoke(input);

        return input.read();
      };

      // Build a node from this form's schema.
      this.build_node = function(options, traverse) {

        // Save a reference to this so we can call it.
        var form = this,
            single_tag = false;

        // Prepare an empty node to contain all generated elements.
        var node = new self.Tag({
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
            single_tag = true;
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

            // Find the pipeline to use for this tag
            pipeline = data[':tag']||'tag';

            // Build tag
            tag = new self.Tag({
              "id": options.prefix_id+name,
              "name": name,
              "value": form.values[name],
              "schema": data
            });

            // Append a tag to the current node
            node.append(form.pipeline(tag, pipeline));
          }

        });

        // When recursion bottoms out, pass result through set pipeline
        // for final transformations (as long as it isn't a single tag)
        if(!single_tag) {
          // Find the pipeline to use for this tag
          pipeline = options.schema[':set']||'set';
          this.pipeline(node,pipeline);
        }

        return node.read();
      };

    };

    return Form;

  };

});

