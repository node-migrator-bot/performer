// TODO: these should be generated with tag instances so the wrapping tags can be customized via the schema
define(['performer/tag'], function(Tag) {

  var Wrap = {};

  Wrap.fieldset = function(input, helpers) {
    // do stuff with schema.wrap_fieldset
    return input.write("<fieldset>"+input.read()+"</fieldset>");
  };
  Wrap.legend = function(input, helpers) {
    // do stuff with schema.wrap_legend
    return input.write("<legend>"+input.read()+"</legend>");
  };
  Wrap.div = function(input, helpers) {
    // do stuff with schema.wrap_div
    return input.write("<div>"+input.read()+"</div>");
  };
  Wrap.ul = function(input, helpers) {
    // do stuff with schema.wrap_ul
    return input.write("<ul>"+input.read()+"</ul>");
  };
  Wrap.ol = function(input, helpers) {
    // do stuff with schema.wrap_ol
    return input.write("<ol>"+input.read()+"</ol>");
  };
  Wrap.li = function(input, helpers) {
    // do stuff with schema.wrap_li
    return input.write("<li>"+input.read()+"</li>");
  };
  Wrap.p = function(input, helpers) {
    // do stuff with schema.wrap_p
    return input.write("<p>"+input.read()+"</p>");
  };
  Wrap.span = function(input, helpers) {
    // do stuff with schema.wrap_span
    return input.write("<span>"+input.read()+"</span>");
  };

  return Wrap;

});