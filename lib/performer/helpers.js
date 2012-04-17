define(['performer/core'], function(_) {

  var Constructor = function() {

    this.register = function(name, method) {
      this[name] = method;
    };

  };

  var Helpers = new Constructor();

  Helpers.register('attr_html', function(schema, ignore_value) {
    var attributes = _.map(schema, function(val,key) {
      if(_.isEmpty(val) || (ignore_value && key == 'value')) {
        return null;
      }
      if(key === 'className') { key = 'class'; }
      return key+"=\""+_.escape(val)+"\"";
    });

    return _.compact(attributes).join(' ');
  });

  Helpers.register('titleize', function(name) {
    if(!name) { return ""; }

    name = name.toLowerCase()
               .replace('_', ' ')
               .split(' ');

    return name.map(function(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(' ');

  });

  return Helpers;
});
