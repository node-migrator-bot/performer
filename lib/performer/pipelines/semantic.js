define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Serialize, Wrap, Sibling) {

  return {
    tag: new Pipeline([Serialize.standard,Sibling.label,Wrap.li]),
    set: new Pipeline([Wrap.ol,Sibling.legend,Wrap.fieldset])
  };

});
