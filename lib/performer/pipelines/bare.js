define([

  'performer/pipeline',
  'performer/transformers/serialize'

],
function(Pipeline, Serialize) {

  var tag = [Serialize.standard];
  var group = [];

  return new Pipeline(tag, group);

});
