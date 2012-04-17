// TODO: check for data validity and write tests too
define([
  'performer/core',
  'performer/merge'
],
function(_, merge) {

  var Blueprint = function(schema) {

    // Instantiate blueprint with a copied object.
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
      return data[name] = merge(data[name],value);
    };

    this.replace = function(name, value) {
      return data[name] = value;
    };

    this.impute = function(tag) {

      // prepare a result from a *copy* of the source data
      var result = merge({},tag);

      // if tag has a blueprint, merge it
      if(tag.blueprint && (blueprint = this.read(tag.blueprint))) {
        result = merge(merge({},blueprint),tag);
        // remove blueprint source from result
        delete result.blueprint;
      }

      return result;
    };

  };

  return Blueprint;

});
