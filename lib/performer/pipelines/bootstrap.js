// TOOD: get the right pipeline in for bootstrap compliance
define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/label'

],
function(Pipeline, Serialize, Wrap, Label) {

  var tag_pipeline = [Serialize.standard];
  var group_pipeline = [Wrap.div];

  return new Pipeline(tag_pipeline,group_pipeline);
});