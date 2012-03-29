define([

  'performer/pipeline',
  'performer/transformers/serialize'

],
function(Pipeline, Serialize) {

  var tag_pipeline = [Serialize.standard];
  var group_pipeline = [];

  return new Pipeline(tag_pipeline,group_pipeline);

});