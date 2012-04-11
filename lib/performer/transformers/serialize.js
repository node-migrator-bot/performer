// TODO: testing
define([

  'performer/core',
  'performer/tag'

],
function(_, Tag) {

  Serialize = {};

  Serialize.standard = function(input, helpers) {

    var tmp,
        output,
        attributes,
        VALUE_NOT_IN_TAG = ['select'],
            SELF_CLOSING = ['img','input'],
                     tag = input.schema.tag;

    // if value belongs in tag, add it to attributes
    if(_.contains(VALUE_NOT_IN_TAG, tag)) {
      input.schema.value = input.value;
    }

    // build valid html key="value" pairs
    attributes = helpers.attr_html(input.schema.attributes);

    // build a selectbox
    if(input.schema.tag === 'select') {
      output = "<select "+attributes+">";
      _.each(input.schema.options,function(value, key) {
        tmp = (key === input.value ? " SELECTED" : "");
        output += "<option value=\""+_.escape(key)+"\""+tmp+">"+_.escape(value)+"</option>";
      });
      output += "</select>";
    }

    // build a checkbox
    if(input.schema.attributes.type === 'checkbox') {
      output = "<input type=\"hidden\" name=\""+input.name+"\" value=\"false\"/>";
      output += "<"+(tag)+" "+attributes+"/>";
    }

    // build all others
    if(!output) {
      if(_.contains(SELF_CLOSING, tag)) {
          output = "<"+(tag)+" "+attributes+"/>";
      } else {
        output = "<"+(tag)+" "+attributes+">"+input.read()+"</"+tag+">";
      }
    }

    return input.write(output);
  };

  return Serialize;
});
