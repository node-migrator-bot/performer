// TOOD: get the right pipeline in for bootstrap compliance
define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/label'

],
function(Pipeline, Serialize, Wrap, Label) {

  var tag = [Serialize.standard];
  var group = [Wrap.div];

  return new Pipeline(tag, group);
});