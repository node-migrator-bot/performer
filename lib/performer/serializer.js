define([

    'performer/core',
    'performer/tag'

  ],
  function(core, Tag) {

    // The base serialization class.  Converts Tag objects into safely
    // escaped html elements.
    var Serializer = function() {

      // An array of tag names that should output in self-closing format.
      this.SELF_CLOSING = ['img','input'];

      // Convert the attributes of a Tag instance into key value pairs for
      // an HTML element.
      this.attr_html = function(tag)
      {
        var attributes = core.map(tag.attributes,function(val,key) {
          if(core.isEmpty(val)) return null;
          if(key == 'className') {
            key = 'class';
          }
          return key+"=\""+val+"\"";
        });
        return attributes.length !== 0 ? " "+attributes.join(' ') : "";
      };

      this.invoke = function(tag) {

        switch(tag.constructor) {

          case Tag:
            if(core.contains(this.SELF_CLOSING,tag.type)) {
              return "<"+(tag.type)+(this.attr_html(tag))+"/>";
            }
            else {
              return "<"+(tag.type)+(this.attr_html(tag))+"></"+tag.type+">";
            }
            break;

          case Array:
            self = this;
            return core.map(tag,function(tag) {
              return self.invoke(tag);
            }).join('');

        }
      };

    };

    // Allow this constructor to be extended and the methods within overridden.
    Serializer.extend = core.extend_class;

    // Alias as standard.
    Serializer.standard = Serializer;

    return Serializer;
});