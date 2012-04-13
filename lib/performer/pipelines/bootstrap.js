define([

  'performer/pipeline',
  'performer/transformers/serialize',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Serialize, Wrap, Sibling) {

  var control_group = function(input, helpers) {
    return input.write("<div class=\"control_group\">"+input.read()+"</div>");
  };

  var control_label = function(input, helpers) {
    var title = input.schema['label']||helpers.titleize(input.name);
    return input.write("<label class=\"control-label\" for=\""+input.id+"\">"+title+"</label>"+input.read());
  };

  var control = function(input, helpers) {
    return input.write("<div class=\"controls\">"+input.read()+"</div>");
  };

  return {
    tag: new Pipeline([Serialize.standard,control,control_label]),
    set: new Pipeline([control_group,Sibling.legend,Wrap.fieldset])
  };

});
