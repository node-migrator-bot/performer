define([

  ],
  function() {

    Label = {};

    Label.wrap = function(input, output) {
      return output.write("<label>"+input.read()+"</label>");
    };

    Label.child = function(input, output) {
      return output.write("<label>"+input.type+" label</label>"+input.read());
    };

    return Label;

});