// TODO: these should be generated with tag instances
define(['performer/tag'], function(Tag) {

  var Wrap = {};

  Wrap.fieldset = function(input, output) {
    return output.write("<fieldset>"+input.read()+"</fieldset>");
  };
  Wrap.ol = function(input, output) {
    return output.write("<ol>"+input.read()+"</ol>");
  };
  Wrap.li = function(input, output) {
    return output.write("<li>"+input.read()+"</li>");
  };
  Wrap.p = function(input, output) {
    return output.write("<p>"+input.read()+"</p>");
  };
  Wrap.div = function(input, output) {
    return output.write("<div>"+input.read()+"</div>");
  };
  Wrap.span = function(input, output) {
    return output.write("<span>"+input.read()+"</span>");
  };

  return Wrap;

});