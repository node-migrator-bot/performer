define(['performer/core','performer/merge'],
function(_, merge) {

  var Tag = function(id, name, value, schema) {

    var output = "";

    this.id = id;
    this.name = name;
    this.value = value;

    // Instantiate tag with a copy of the schema provided.
    this.schema = merge({},schema);

    // Set up attributes
    if(!this.schema.attributes) this.schema.attributes = {};

    this.schema.attributes.id = this.schema.attributes.id||id;
    this.schema.attributes.name = this.schema.attributes.name||name;
    this.schema.attributes.value = this.schema.attributes.value||value;

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
