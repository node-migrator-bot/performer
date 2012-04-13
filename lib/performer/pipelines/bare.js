define([

  'performer/pipeline',
  'performer/transformers/serialize'

],
function(Pipeline, Serialize) {

  return {
    tag: new Pipeline([Serialize.standard]),
    set: new Pipeline([])
  };

});
