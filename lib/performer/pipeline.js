// TODO: check for tag_pipeline/group_pipeline existence and write tests, too.
define(['performer/core'], function(_) {

  var Pipeline = function(tag_pipeline, group_pipeline) {

    this.tag = function(tag, pipeline) {
      // Use explicitly defined pipeline if given.
      pipeline = pipeline||tag_pipeline;

      // Send tag through a pipeline.
      _.each(pipeline,function(transform) {
        transform(tag, tag);
      });

      // Return the pipeline-processed tag.
      return tag.read();
    };

    this.group = function(group, pipeline) {
      // Use explicitly defined pipeline if given.
      pipeline = pipeline||group_pipeline;

      // Send output through a pipeline.
      _.each(pipeline,function(transform) {
        transform(group, group);
      });

      // Return the pipeline-processed output.
      return group.read();
    };

  };

  return Pipeline;

});