define([

    'performer/core'

  ],
  function(_) {

    var Schema = function(schema) {

      var data = schema;

      // Locate a branch in the schema
      this.read = function(search) {

        var i = 0,
            len,
            result = data;

        // If no search defined, return entire schema.
        if(!search) {
          return data;
        }

        // if not an array already, split for dot notation
        if(!_.isArray(search)) {
          search = search.split('.');
        }

        // cache length
        len = search.length;

        // traverse schema to locate tag
        for(;i<len;i++) {
          if(result.fields[search[i]]) {
            result = result.fields[search[i]];
          }
        }

        // if the result is the same as the schema, nothing was found
        if(result == data) {
          throw new Error('Unable to locate '+search+' in schema.');
        }

        return result;
      };

    };

    return Schema;

});