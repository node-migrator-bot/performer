define(['performer/core'], function(_) {

  var Schema = function(schema) {

    var data = schema;

    // Locate a branch in the schema
    this.read = function(search) {
      var i = 0,
          len,
          hit,
          result = data.root;

      // If no search defined, return entire schema.
      if(!search) {
        return data;
      }

      // If search is for root only, return it immediately.
      if(search === 'root') {
        return data.root;
      }

      // If search is not an array, split on '.' for dot notation lookup.
      if(!_.isArray(search)) {
        search = search.split('.');
      }

      // Cache length.
      len = search.length;

      // Search schema to locate node.
      for(;i<len;i++) {
        // Traverse a level deeper and continue;
        if(result._fields[search[i]]) {
          result = result._fields[search[i]];
          continue;
        }
        throw new Error('Unable to locate '+search.join('.')+' in schema.');
      }
      return result;
    };

  };

  return Schema;

});