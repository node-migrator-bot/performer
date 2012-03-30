define([

  'performer/core',
  'performer/tag'

],
function(_, Tag) {

  Serialize = {};

  Serialize.standard = function(input, output) {

    var tagname, attributes;

    var SELF_CLOSING = ['img','input'];

    if(input.constructor === Tag) {

      tagname = input.schema.tag;
      attributes = input.attr_html();

      if(_.contains(SELF_CLOSING, tagname)) {
        return output.write("<"+(tagname)+" "+attributes+"/>");
      } else {
        return output.write("<"+(tagname)+" "+attributes+">"+input.read()+"</"+tagname+">");
      }
    }
    else {
      return output.write(input.read());
    }
  };

  return Serialize;
});