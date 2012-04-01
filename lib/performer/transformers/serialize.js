// TODO: testing
define([

  'performer/core',
  'performer/tag'

],
function(_, Tag) {

  Serialize = {};

  Serialize.standard = function(input, helpers) {

    var VALUE_NOT_IN_TAG = ['select'],
            SELF_CLOSING = ['img','input'],
                 tagname = input.schema.tag,
              attributes = helpers.attr_html(input.schema.attributes),
                  output;

    switch(tagname) {

      case 'select':
        output = "<select "+attributes+">";
        _.each(input.schema.options,function(value, key) {
          output += "<option value=\""+_.escape(key)+"\">"+_.escape(value)+"</option>";
        });
        output += "</select>";
        break;

      case 'checkbox':
        output = "extra tag for false value";
        break;

      default:
        if(_.contains(SELF_CLOSING, tagname)) {
          output = "<"+(tagname)+" "+attributes+"/>";
        } else {
          output = "<"+(tagname)+" "+attributes+">"+input.read()+"</"+tagname+">";
        }
        break;
    }

    return input.write(output);
  };

  return Serialize;
});