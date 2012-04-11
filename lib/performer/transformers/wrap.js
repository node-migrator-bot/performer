// TODO: these should be generated with tag instances so the wrapping tags can be customized via the schema
define([], function() {

  var Wrap = {};

  Wrap.fieldset = function(input, helpers) {
    return input.write("<fieldset>"+input.read()+"</fieldset>");
  };
  Wrap.label = function(input, helpers) {
    return input.write("<label>"+input.read()+"</label>");
  };
  Wrap.ul = function(input, helpers) {
    return input.write("<ul>"+input.read()+"</ul>");
  };
  Wrap.ol = function(input, helpers) {
    return input.write("<ol>"+input.read()+"</ol>");
  };
  Wrap.li = function(input, helpers) {
    return input.write("<li>"+input.read()+"</li>");
  };
  Wrap.div = function(input, helpers) {
    return input.write("<div>"+input.read()+"</div>");
  };
  Wrap.p = function(input, helpers) {
    return input.write("<p>"+input.read()+"</p>");
  };
  Wrap.span = function(input, helpers) {
    return input.write("<span>"+input.read()+"</span>");
  };

  return Wrap;

});
