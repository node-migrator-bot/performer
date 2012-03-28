define([

    'performer/core',
    'performer/klass',
    'performer/tag'

  ],
  function(_, klass, Tag) {

    var Serialize = function() {

      // Tag names that should output in self-closing format.
      this.SELF_CLOSING = ['img','input'];

    };
    Serialize.extend = klass.extend;

    Serialize.standard = Serialize.extend({

      invoke: function(input, output) {

        if(input.constructor == Tag) {
          if(_.contains(this.SELF_CLOSING,input.tag)) {
            return output.write("<"+(input.tag)+" "+(input.attr_html())+"/>");
          } else {
            return output.write("<"+(input.tag)+" "+(input.attr_html())+">"+input.read()+"</"+input.tag+">");
          }
        }
        else {
          return output.write(input.read());
        }
      }

    });

    return Serialize;
});