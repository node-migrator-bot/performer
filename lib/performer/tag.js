define([

    'performer/core',
    'performer/klass'

  ],
  function(_, klass) {

    var Tag = function(type, attributes) {

      this.type = type;
      this.attributes = attributes || (attributes = {});
      this.output = "";

      // Convert the attributes of a Tag instance into key value pairs for
      // an HTML element.
      this.attr_html = function()
      {
        var attributes = _.map(this.attributes,function(val,key) {
          if(_.isEmpty(val)) return null;
          if(key == 'className') { key = 'class'; }
          return key+"=\""+_.escape(val)+"\"";
        });
        return _.compact(attributes).join(' ');
      };

      this.read = function() {
        return this.output;
      };

      this.write = function(str) {
        return (this.output = str);
      };

      // call initialize on instantiation
      this.initialize = function(){};
      this.initialize.apply(this, arguments);
    };

    // Allow this constructor to be extended and the methods within overridden.
    Tag.extend = klass.extend;

    return Tag;
});