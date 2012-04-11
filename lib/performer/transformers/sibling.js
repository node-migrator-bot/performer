// TODO: testing
define([], function() {

  var Sibling = {};

  Sibling.label = function(input, helpers) {
    var title = input.schema['label']||helpers.titleize(input.name);
    return input.write("<label for=\""+input.id+"\">"+title+"</label>"+input.read());
  };

  Sibling.legend = function(input, helpers) {
    var title = input.schema[':legend']||"";
    return input.write("<legend>"+title+"</legend>"+input.read());
  };

  return Sibling;

});

