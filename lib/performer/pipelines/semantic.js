define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/label'

],
function(Pipeline, Serialize, Wrap, Label) {

  var tag = [Serialize.standard,Label.child,Wrap.li];
  var group = [Wrap.ol,Wrap.fieldset];

  return new Pipeline(tag, group);
});
