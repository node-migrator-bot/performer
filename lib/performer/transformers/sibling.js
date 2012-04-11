// TODO: testing
define([], function() {

  var Sibling = {};

  Sibling.label = function(input, helpers) {
    return input.write("<label for=\""+input.id+"\">"+input.name+"</label>"+input.read());
  };

  Sibling.legend = function(input, helpers) {
    var title = input.schema[':legend']||"";
    return input.write("<legend>"+title+"</legend>"+input.read());
  };

  return Sibling;

});

