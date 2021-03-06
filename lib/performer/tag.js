define(['performer/core','performer/merge'],
function(_, merge) {

  var Tag = function(options) {

    var output = "";

    this.options = options||{};

    this.id = this.options.id;
    this.name = this.options.name;
    this.value = this.options.value;

    // Instantiate tag with a copy of the schema provided.
    this.schema = merge({},this.options.schema);

    // Set up attributes
    if(!this.schema.attributes) this.schema.attributes = {};

    this.schema.attributes.id = this.schema.attributes.id||this.options.id;
    this.schema.attributes.name = this.schema.attributes.name||this.options.name;
    this.schema.attributes.value = this.schema.attributes.value||this.options.value;

    // Provide API to modify tag.
    this.read = function() {
      return output;
    };
    this.write = function(str) {
      return (output = str);
    };
    this.append = function(str) {
      return (output += str);
    };

    // Serialize tag on instantiation (if a serializer has been provided).
    if(this.options.serializer && _.isFunction(this.options.serializer.invoke)) {
      this.options.serializer.invoke(this);
    }

  };

  return Tag;

});
