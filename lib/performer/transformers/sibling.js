define(['performer/transformer'], function(Transformer) {

  var Sibling = {};

  Sibling.label = new Transformer(function(input) {
    var title = input.schema[':label']||(helpers.titleize(input.name)+":");
    return input.write("<label for=\""+input.id+"\">"+title+"</label>"+input.read());
  });

  Sibling.legend = new Transformer(function(input) {
    var title = input.schema[':legend']||"";
    return input.write("<legend>"+title+"</legend>"+input.read());
  });

  return Sibling;

});

