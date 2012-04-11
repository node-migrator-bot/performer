// TOOD: get the right pipeline in for bootstrap compliance
define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap'

],
function(Pipeline, Serialize, Wrap) {

  var tag = [Serialize.standard];
  var group = [Wrap.label,Wrap.div];

  return new Pipeline(tag, group);
});
