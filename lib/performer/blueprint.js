// TODO: check for data validity and write tests too
define([
  'performer/core',
  'performer/merge'
],
function(_, merge) {

  var Blueprint = function(data) {

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
        // do not modify blueprint, return a copy
        return merge({},blueprint,tag);
      } else {
        return tag;
      }
    };

  };

  return Blueprint;

});