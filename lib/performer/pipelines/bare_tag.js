define([

  'performer/pipeline',
  'performer/transformers/serialize'

],
function(Pipeline, Serialize) {

  return new Pipeline([Serialize.standard]);

});
