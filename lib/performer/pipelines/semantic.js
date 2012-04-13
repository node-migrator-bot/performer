define([

  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Wrap, Sibling) {

  return {
    tag: [Sibling.label,Wrap.li],
    set: [Wrap.ol,Sibling.legend,Wrap.fieldset]
  };

});
