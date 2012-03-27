define([

    'performer/core',
    'performer/klass',
    'performer/tag'

  ],
  function(_, klass, Tag) {

    // The base serialization class.  Converts Tag objects into safely
    // escaped html elements.
    var Serializer = function() {

      // An array of tag names that should output in self-closing format.
      this.SELF_CLOSING = ['img','input'];

      // Convert the attributes of a Tag instance into key value pairs for
      // an HTML element.
      this.attr_html = function(tag)
      {
        var attributes = _.map(tag.attributes,function(val,key) {
          if(_.isEmpty(val)) return null;
          if(key == 'className') {
            key = 'class';
          }
          return key+"=\""+val+"\"";
        });
        return _.compact(attributes).join(' ');
      };

      this.invoke = function(tag) {

        switch(tag.constructor) {

          case Tag:
            if(_.contains(this.SELF_CLOSING,tag.type)) {
              return "<"+(tag.type)+(this.attr_html(tag))+"/>";
            }
            else {
              return "<"+(tag.type)+(this.attr_html(tag))+"></"+tag.type+">";
            }
            break;

          case Array:
            self = this;
            return _.map(tag,function(tag) {
              return self.invoke(tag);
            }).join('');

        }
      };

    };

    // Allow this constructor to be extended and the methods within overridden.
    Serializer.extend = klass.extend;

    // Alias as standard.
    Serializer.standard = Serializer;

    return Serializer;
});