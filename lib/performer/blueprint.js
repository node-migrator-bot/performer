// TODO: check for data validity and write tests too
define([
  'performer/core',
  'performer/merge'
],
function(_, merge) {

  var Blueprint = function(schema) {

    // create blueprint with a copy of the schema passed
    var data = merge({},schema);

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

    this.add = function(name, value) {
      if(data[name]) {
        throw new Error("Unable to add '"+name+"' blueprint; it already exists.");
      }
      return (data[name] = value);
    };

    this.add_many = function(blueprint) {
      _.each(blueprint, function(value, name) {
        data[name] = value;
      });
    };

    this.remove = function(name) {
      delete data[name];
    };

    this.modify = function(name, value) {
      if(!data[name]) {
        throw new Error("Unable to locate '"+name+"' blueprint to modify.");
      }
      return _.extend(data[name], value);
    };

    this.replace = function(name, value) {
      return data[name] = value;
    };

    this.impute = function(tag) {
      var blueprint;

      // if data doesn't use a blueprint, return as is.
      if(!tag.blueprint) {
        return tag;
      }
      if((blueprint = this.read(tag.blueprint))) {
        // return a _copy_ of a blueprint merged with a tag
        return merge(merge({},blueprint),tag);
      } else {
        return tag;
      }
    };

  };

  return Blueprint;

});