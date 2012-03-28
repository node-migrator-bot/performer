define([

    'performer/core',

  ],
  function(_) {

    var Tag = function(id, data, type_system) {

      var format;
      this.id = id;
      this.data = data;

      // If a global type_system has been passed, use it to define tag.
      if(type_system && data.format) {
        format = type_system.find(data.format);
        this.tag = format.tag;
        this.attributes = _.extend(format.attributes,format.attributes||{});
      } else {
        // Otherwise, define tag explicitly.
        this.tag = data.tag;
        this.attributes = data.attributes;
      }

      // Convert the attributes into key value pairs for an HTML element.
      this.attr_html = function() {
        var attributes = _.map(this.attributes,function(val,key) {
          if(_.isEmpty(val)) return null;
          if(key == 'className') { key = 'class'; }
          return key+"=\""+_.escape(val)+"\"";
        });
        return _.compact(attributes).join(' ');
      };

      // Handle initial serialization.
      // TODO: Refactor to re-use Output class.
      this.output = "";
      this.read = function() {
        return this.output;
      };
      this.write = function(str) {
        return (this.output = str);
      };
    };

    return Tag;
});