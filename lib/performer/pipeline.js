define([

    'performer/core',
    'performer/transform/serialize',
    'performer/output'

  ],
  function(_, Serialize, Output) {

    var Pipeline = function(tag_pipeline, group_pipeline) {

      // Set default pipelines.
      tag_pipeline = tag_pipeline||[Serialize.standard];
      group_pipeline = group_pipeline||[];

      this.tag = function(tag, pipeline) {

        // Use explicitly defined pipeline if given.
        pipeline = pipeline||tag_pipeline;

        // Send tag through a pipeline.
        _.each(pipeline,function(transform) {
          new transform().invoke(tag, tag);
        });

        // Return the pipeline-processed tag.
        return tag.read();
      };

      this.group = function(group, pipeline) {

        // Use explicitly defined pipeline if given.
        pipeline = pipeline||group_pipeline;

        // Send output through a pipeline.
        _.each(pipeline,function(transform) {
          new transform().invoke(group, group);
        });

        // Return the pipeline-processed output.
        return group.read();
      };

    };

    return Pipeline;
});