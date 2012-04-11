define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Serialize, Wrap, Sibling) {

  var tag = [Serialize.standard,Sibling.label,Wrap.li];
  var group = [Wrap.ol,Wrap.fieldset];

  return new Pipeline(tag, group);
});
