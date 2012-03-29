// TODO: remove type system merging from tag class, it belongs in the type class
define(['performer/core'], function(_) {

  var Tag = function(id, data) {
    var format;

    this.id = id;
    this.tag = data.tag;
    this.attributes = data.attributes||{};

    // if id is explicitly defined, override id from schema key
    if(!this.attributes.id) this.attributes.id = id;

    // Convert the attributes into key value pairs for an HTML element.
    this.attr_html = function() {
      var attributes = _.map(this.attributes, function(val,key) {
        if(_.isEmpty(val)) return null;
        if(key === 'className') { key = 'class'; }
        return key+"=\""+_.escape(val)+"\"";
      });
      return _.compact(attributes).join(' ');
    };

    // Handle initial serialization.
    // TODO: Refactor to re-use Output class.
    var output = "";
    this.read = function() {
      return output;
    };
    this.write = function(str) {
      return (output = str);
    };
  };

  return Tag;

});