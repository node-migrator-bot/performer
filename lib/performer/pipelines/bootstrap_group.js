define([

  'performer/pipeline',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Wrap, Sibling) {

  var control_group = function(input, helpers) {
    return input.write("<div class=\"control_group\">"+input.read()+"</div>");
  };

  return new Pipeline([control_group,Sibling.legend,Wrap.fieldset]);
});
