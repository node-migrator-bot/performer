define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Serialize, Wrap, Sibling) {

  return new Pipeline([Serialize.standard,Sibling.label,Wrap.li]);

});
