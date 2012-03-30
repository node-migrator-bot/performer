define([], function() {

  Label = {};

  Label.wrap = function(input, helpers) {
    // do stuff with schema.label_wrap
    return input.write("<label>"+input.read()+"</label>");
  };

  Label.child = function(input, helpers) {
    // do stuff with schema.label_child
    return input.write("<label>"+input.type+" label</label>"+input.read());
  };

  return Label;

});