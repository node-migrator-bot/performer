define([

  'performer/pipeline',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Wrap, Sibling) {

  return {
    tag: new Pipeline([Sibling.label,Wrap.li]),
    set: new Pipeline([Wrap.ol,Sibling.legend,Wrap.fieldset])
  };

});
