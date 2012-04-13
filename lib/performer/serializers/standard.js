define([

  'performer/core',
  'performer/transformer'

],
function(_, Transformer) {

  var serializer = new Transformer(function(input) {

    var tmp,
        output,
        attributes,
        VALUE_NOT_IN_TAG = ['select'],
            SELF_CLOSING = ['input'],
                     tag = input.schema.tag;

    // if value belongs in tag, add it to attributes
    if(_.contains(VALUE_NOT_IN_TAG, tag)) {
      input.schema.value = input.value;
    }

    // build valid html key="value" pairs
    attributes = this.attr_html(input.schema.attributes);

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
      output = "<"+(tag)+" "+attributes+"/>";
      // only add 'false' checkbox if this tag has a name
      if(!_.isEmpty(input.name)) {
        output =  "<input type=\"hidden\" name=\""+input.name+"\" value=\"false\"/>"+output;
      }
    }

    // build all others
    if(!output) {
      if(_.contains(SELF_CLOSING, tag)) {
          output = "<"+(tag)+" "+attributes+"/>";
      } else {
        output = "<"+(tag)+" "+attributes+">"+input.read()+"</"+tag+">";
      }
    }

    // insert code before
    if(input.schema[':before']) {
      output = input.schema[':before']+output;
    }

    // insert code after
    if(input.schema[':after']) {
      output = output+input.schema[':after'];
    }

    // execute wrapper function
    if(_.isFunction(input.schema[':around'])) {
      output = input.schema[':around'](output);
    }

    return input.write(output);
  });

  return serializer;

});
