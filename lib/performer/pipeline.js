define([

    'performer/core',
    'performer/transform/serialize',
    'performer/output'

  ],
  function(_, Serialize, Output) {

    var Pipeline = function(tag, group) {

      // Set default pipelines.
      this.tag_pipeline = tag||[Serialize.standard];
      this.group_pipeline = group||[];

      this.tag = function(tag, pipeline) {

        // Use explicitly defined pipeline if given.
        pipeline = pipeline||this.tag_pipeline;

        // Send tag through a pipeline.
        _.each(pipeline,function(transform) {
          new transform().invoke(tag, tag);
        });

        // Return the pipeline-processed tag.
        return tag.read();
      };

      this.group = function(group, pipeline) {

        // Initialize new output with tag group for pipelining.
        var output = new Output(group);

        // Use explicitly defined pipeline if given.
        pipeline = pipeline||this.group_pipeline;

       // Sent output through a pipeline.
        _.each(pipeline,function(transform) {
          new transform().invoke(output, output);
        });

        // Return the pipeline-processed output.
        return output.read();
      };

    };

    return Pipeline;
});