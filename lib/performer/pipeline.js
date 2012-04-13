define([

  'performer/core',
  'performer/helpers'

],
function(_, Helpers) {

  var Pipeline = function(transformers) {

    this.invoke = function(input, helpers) {

      // Give pipeline access to helpers
      helpers = _.extend(Helpers, helpers);

      // Send input through transformers.
      _.each(transformers,function(transform) {
        transform(input, helpers);
      });

      // Return the pipeline-processed input.
      return input.read();
    };

  };

  return Pipeline;

});
