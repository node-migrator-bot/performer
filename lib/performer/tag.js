define(['performer/core'],
function(_) {

  var Tag = function(id, schema) {

    var output = "";

    this.id = id;
    this.schema = schema;

    if(!this.schema.attributes) this.schema.attributes = {};

    // if id is explicitly defined, override id from schema key
    if(!this.schema.attributes.id) {
       this.schema.attributes.id = id;
    }

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