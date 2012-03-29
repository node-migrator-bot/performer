// TODO: these should be generated with tag instances so the wrapping tags can be customized via the schema
define(['performer/tag'], function(Tag) {

  var Wrap = {};

  Wrap = function(input, output) {
    return output.write("<fieldset>"+input.read()+"</fieldset>");
  };
  Wrap.legend = function(input, output) {
    return output.write("<legend>"+input.read()+"</legend>");
  };
  Wrap.div = function(input, output) {
    return output.write("<div>"+input.read()+"</div>");
  };
  Wrap.ul = function(input, output) {
    return output.write("<ul>"+input.read()+"</ul>");
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
  Wrap.span = function(input, output) {
    return output.write("<span>"+input.read()+"</span>");
  };

  return Wrap;

});