// TODO: testing
define([

  'performer/core',
  'performer/tag'

],
function(_, Tag) {

  Serialize = {};

  Serialize.standard = function(input, helpers) {

    var tagname,
        attributes,
        SELF_CLOSING = ['img','input'];

    if(input.constructor === Tag) {

      tagname = input.schema.tag;
      attributes = helpers.attr_html(input.schema.attributes);

      if(_.contains(SELF_CLOSING, tagname)) {
        return input.write("<"+(tagname)+" "+attributes+"/>");
      } else {
        return input.write("<"+(tagname)+" "+attributes+">"+input.read()+"</"+tagname+">");
      }
    }
    else {
      return input.write(input.read());
    }
  };

  return Serialize;
});