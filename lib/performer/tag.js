define(['performer/core','performer/merge'],
function(_, merge) {

  var Tag = function(id, value, schema) {

    var output = "";

    this.id = id;
    this.value = value;

    // save schema for this tag with a copied object
    this.schema = merge({},schema);

    // initialize attributes object if none exists
    if(!this.schema.attributes) this.schema.attributes = {};

    // assign id
    this.schema.attributes.id = id;

    // assign value
    this.schema.attributes.value = false;

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
