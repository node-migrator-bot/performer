define([

  'performer/core',
  'performer/merge'

],
function(_, merge) {

  var Schema = function(schema) {
    // Instantiate with a copied object.
    this.data = merge({},schema);

  };

  Schema.prototype.read = function(search) {
    var i = 1,
        len,
        hit,
        result = this.data;

    // If no search defined, return entire schema.
    if(!search) {
      return this.data;
    }

    // If search is not an array, split on '.' for dot notation lookup.
    if(!_.isArray(search)) {
      search = search.split('.');
    }

    // Cache length.
    len = search.length;

    // start search at root
    result = result[search[0]];

    // Search schema to locate node.
    for(;i<len;i++) {

      // Traverse a level deeper and continue;
      if(result[search[i]]) {
        result = result[search[i]];
        continue;
      }
      throw new Error('Unable to locate '+search.join('.')+' in schema.');
    }

    return result;
  };

  return Schema;

});
