define([], function() {

  Label = {};

  Label.wrap = function(input, helpers) {
    // do stuff with schema.label_wrap
    return input.write("<label>"+input.read()+"</label>");
  };

  Label.child = function(input, helpers) {
    // do stuff with schema.label_child
    return input.write("<label for=\""+input.schema.attributes.id+"\">"+input.schema.attributes.name+"</label>"+input.read());
  };

  return Label;

});
