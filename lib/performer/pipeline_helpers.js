define(['performer/core'], function(_) {

  var Helpers = {};

  Helpers.attr_html = function(schema) {
    var attributes = _.map(schema, function(val,key) {
      if(_.isEmpty(val)) return null;
      if(key === 'className') { key = 'class'; }
      return key+"=\""+_.escape(val)+"\"";
    });

    return _.compact(attributes).join(' ');
  };

  return Helpers;

});
