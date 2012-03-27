define([

    'performer/core',
    'performer/klass',
    'performer/tag'

  ],
  function(_, klass, Tag) {

    // The base serialization class.  Converts Tag objects into safely
    // escaped html elements.
    var Serialize = function() {

      // An array of tag names that should output in self-closing format.
      this.SELF_CLOSING = ['img','input'];

      // Convert the attributes of a Tag instance into key value pairs for
      // an HTML element.
      this.attr_html = function(tag)
      {
        var attributes = _.map(tag.attributes,function(val,key) {
          if(_.isEmpty(val)) return null;
          if(key == 'className') { key = 'class'; }
          return key+"=\""+_.escape(val)+"\"";
        });
        return _.compact(attributes).join(' ');
      };

    };

    // Allow this constructor to be extended and the methods within overridden.
    Serialize.extend = klass.extend;

    Serialize.standard = Serialize.extend({

      invoke: function(input, output) {

        if(input.constructor == Tag) {
          if(_.contains(this.SELF_CLOSING,input.type)) {
            return output.write("<"+(input.type)+(this.attr_html(input))+"/>");
          } else {
            return output.write("<"+(input.type)+(this.attr_html(input))+"></"+input.type+">");
          }
        }
        else {
          return output.write(input.read());
        }
      }

    });

    return Serialize;
});