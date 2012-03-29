// TODO: check for data validity and write tests too
define(['performer/core'], function(_) {

  var Blueprint = function(data, keys) {

    this.data = data;

    // Which keys do we search for in blueprints?
    this.keys = keys||['attributes','_fields'];

    this.read = function(name) {
      var blueprint;

      if(!name) {
        return data;
      }
      if(!(blueprint = data[name])) {
        throw new Error("Unable to locate '"+name+"' blueprint.");
      }
      return blueprint;
    };

    this.add = function(name, attributes) {
      if(data[name]) {
        throw new Error("Unable to add '"+name+"' blueprint; it already exists.");
      }
      return (data[name] = attributes);
    };

    this.remove = function(name) {
      delete data[name];
    };

    this.extend = function(name, attributes) {
      if(!data[name]) {
        throw new Error("Unable to locate '"+name+"' blueprint to extend.");
      }
      return _.extend(data[name], attributes);
    };

    this.impute = function(tag) {
      var blueprint;

      // if data doesn't use a blueprint, return as is.
      if(!tag.blueprint) {
        return tag;
      }
      if((blueprint = this.read(tag.blueprint))) {

        // assign a tag name if blueprint has one and tag doesn't
        if(blueprint.tag && !tag.tag) {
          tag.tag = blueprint.tag;
        }

        // use blueprint for each defined key, extending tag data over it
        _.each(this.keys,function(key) {
          if(blueprint[key]) {
            tag[key] = _.extend(blueprint[key],tag[key]);
          }
        });
      }
      return tag;
    };

  };

  return Blueprint;

});