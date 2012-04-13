define([

  'performer/transformer',
  'performer/transformers/wrap',
  'performer/transformers/sibling'

],
function(Transformer, Wrap, Sibling) {

  var control_group = new Transformer(function(input) {
    return input.write("<div class=\"control-group\">"+input.read()+"</div>");
  });

  var control_label = new Transformer(function(input) {
    var title = input.schema[':label']||this.titleize(input.name);
    return input.write("<label class=\"control-label\" for=\""+input.id+"\">"+title+"</label>"+input.read());
  });

  var label_inline = new Transformer(function(input) {
    var title = this.titleize(input.schema[':label']);
    var className = ['inline'];
    if(input.schema.attributes.type == "checkbox") {
      className.push('checkbox');
    }
    return input.write("<label class=\""+className.join(' ')+"\">"+input.read()+" "+title+"</label>");
  });

  var control = new Transformer(function(input) {
    return input.write("<div class=\"controls\">"+input.read()+"</div>");
  });

  return {
    tag: [control,control_label,control_group],
    set: [Sibling.legend,Wrap.fieldset],
    tag_inline: [label_inline],
    set_inline: [control_group,control]
  };

});
