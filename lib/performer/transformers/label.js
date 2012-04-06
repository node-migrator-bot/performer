define([], function() {

  Label = {};

  Label.wrap = function(input, helpers) {
    return input.write("<label>"+input.read()+"</label>");
  };

  Label.child = function(input, helpers) {
    return input.write("<label for=\""+input.id+"\">"+input.name+"</label>"+input.read());
  };

  return Label;

});
