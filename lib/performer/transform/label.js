// TODO: these should be generated with tag instances
define([

    'performer/klass'

  ],
  function(klass) {

    Label = {};
    Label.extend = klass.extend;

    Label.wrap = Label.extend({
      invoke: function(input, output) {
        return output.write("<label>"+input.read()+"</label>");
      }
    });

    Label.child = Label.extend({
      invoke: function(input, output) {
        return output.write("<label>"+input.type+" label</label>"+input.read());
      }
    });

    return Label;

});