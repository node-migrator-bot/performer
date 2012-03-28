define([

    'performer/klass'

  ],
  function(klass) {

    var Wrap = function() {};
    Wrap.extend = klass.extend;

    Wrap.fieldset = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<fieldset>"+input.read()+"</fieldset>");
      }
    });
    Wrap.ol = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<ol>"+input.read()+"</ol>");
      }
    });
    Wrap.li = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<li>"+input.read()+"</li>");
      }
    });
    Wrap.p = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<p>"+input.read()+"</p>");
      }
    });
    Wrap.div = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<div>"+input.read()+"</div>");
      }
    });
    Wrap.span = Wrap.extend({
      invoke: function(input, output) {
        return output.write("<span>"+input.read()+"</span>");
      }
    });

    return Wrap;

});