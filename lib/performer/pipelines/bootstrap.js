define([

  'performer/pipeline',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Pipeline, Wrap, Sibling) {

  var control_group = function(input, helpers) {
    return input.write("<div class=\"control-group\">"+input.read()+"</div>");
  };

  var control_label = function(input, helpers) {
    var title = input.schema[':label']||helpers.titleize(input.name);
    return input.write("<label class=\"control-label\" for=\""+input.id+"\">"+title+"</label>"+input.read());
  };

  var label_inline = function(input, helpers) {
    var title = helpers.titleize(input.schema[':label']);
    var className = ['inline'];
    if(input.schema.attributes.type == "checkbox") {
      className.push('checkbox');
    }
    return input.write("<label class=\""+className.join(' ')+"\">"+input.read()+" "+title+"</label>");
  };

  var control = function(input, helpers) {
    return input.write("<div class=\"controls\">"+input.read()+"</div>");
  };

  return {
    tag: new Pipeline([control,control_label,control_group]),
    set: new Pipeline([Sibling.legend,Wrap.fieldset]),
    tag_inline: new Pipeline([label_inline]),
    set_inline: new Pipeline([control_group,control])
  };

});
