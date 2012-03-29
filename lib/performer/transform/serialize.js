define([

    'performer/core',
    'performer/tag'

  ],
  function(_, Tag) {

    Serialize = {};

    Serialize.standard = function(input, output) {
      var SELF_CLOSING = ['img','input'];

      if(input.constructor === Tag) {
        if(_.contains(SELF_CLOSING, input.tag)) {
          return output.write("<"+(input.tag)+" "+(input.attr_html())+"/>");
        } else {
          return output.write("<"+(input.tag)+" "+(input.attr_html())+">"+input.read()+"</"+input.tag+">");
        }
      }
      else {
        return output.write(input.read());
      }
    };

    return Serialize;
});