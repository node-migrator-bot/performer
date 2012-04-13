define(['performer/transformer'], function(Transformer) {

  var Wrap = {};

  Wrap.fieldset = new Transformer(function(input) {
    return input.write("<fieldset>"+input.read()+"</fieldset>");
  });

  Wrap.label = new Transformer(function(input) {
    return input.write("<label>"+input.read()+"</label>");
  });

  Wrap.ul = new Transformer(function(input) {
    return input.write("<ul>"+input.read()+"</ul>");
  });

  Wrap.ol = new Transformer(function(input) {
    return input.write("<ol>"+input.read()+"</ol>");
  });

  Wrap.li = new Transformer(function(input) {
    return input.write("<li>"+input.read()+"</li>");
  });

  Wrap.div = new Transformer(function(input) {
    return input.write("<div>"+input.read()+"</div>");
  });

  Wrap.p = new Transformer(function(input) {
    return input.write("<p>"+input.read()+"</p>");
  });

  Wrap.span = new Transformer(function(input) {
    return input.write("<span>"+input.read()+"</span>");
  });

  return Wrap;

});
