define([

  'performer/core',
  'performer/pipeline_helpers'

],
function(_, Helpers) {

  var Pipeline = function(tag_transformers, group_transformers) {

    var invoke = function(transformers, input, helpers) {

      // Give pipeline access to default helpers
      helpers = _.extend(Helpers, helpers);

      // Send input through transformers.
      _.each(transformers,function(transform) {
        transform(input, helpers);
      });

      // Return the pipeline-processed input.
      return input.read();
    };

    this.tag = function(input, helpers) {
      return invoke(tag_transformers, input, helpers);
    };

    this.group = function(input, helpers) {
      return invoke(group_transformers, input, helpers);
    };

  };

  return Pipeline;

});
