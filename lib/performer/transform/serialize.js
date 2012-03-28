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
          console.log(input);
          if(_.contains(this.SELF_CLOSING,input.type)) {
            return output.write("<"+(input.type)+(input.attr_html(input))+"/>");
          } else {
            return output.write("<"+(input.type)+(input.attr_html(input))+">"+input.read()+"</"+input.type+">");
          }
        }
        else {
          return output.write(input.read());
        }
      }

    });

    return Serialize;
});