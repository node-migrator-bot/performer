define([

  'performer/core',
  'performer/helpers'

],
function(_, Helpers) {

  var Transformer = function(method) {

    this.invoke = function(input, helpers) {

      // Give pipeline access to helpers
      helpers = _.extend(Helpers, helpers);

      // Transform input
      return method.call(helpers, input);
    };

  };

  return Transformer;

});
