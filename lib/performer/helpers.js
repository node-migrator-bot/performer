define(['performer/core'], function(_) {

  var Helpers = function() {

    this.register = function(name, method) {
      this[name] = method;
    };

    this.attr_html = function(schema) {
      var attributes = _.map(schema, function(val,key) {
        if(_.isEmpty(val)) return null;
        if(key === 'className') { key = 'class'; }
        return key+"=\""+_.escape(val)+"\"";
      });

      return _.compact(attributes).join(' ');
    };

    this.titleize = function(name) {

      if(!name) {
        return "";
      }

      name = name.toLowerCase()
                 .replace('_', ' ')
                 .split(' ');

      return name.map(function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      }).join(' ');
    };

  };

  return new Helpers();

});