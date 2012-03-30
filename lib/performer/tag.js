define([

  'performer/core',
  'performer/merge'

],
function(_, merge) {

  var Tag = function(id, schema) {

    var output = "";

    this.id = id;

    // make a copy for this instance
    this.schema = merge({},schema);

    if(!this.schema.attributes) this.schema.attributes = {};

    // if id is explicitly defined, override id from schema key
    if(!this.schema.attributes.id) {
       this.schema.attributes.id = id;
    }

    // Convert the attributes into key value pairs for an HTML element.
    this.attr_html = function() {
      var attributes = _.map(this.schema.attributes, function(val,key) {
        if(_.isEmpty(val)) return null;
        if(key === 'className') { key = 'class'; }
        return key+"=\""+_.escape(val)+"\"";
      });
      return _.compact(attributes).join(' ');
    };

    this.read = function() {
      return output;
    };
    this.write = function(str) {
      return (output = str);
    };
    this.append = function(str) {
      return (output += str);
    };

  };

  return Tag;

});