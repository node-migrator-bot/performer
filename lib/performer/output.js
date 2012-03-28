define([

  ],
  function() {

    var Output = function(output) {

      output = output||'';

      this.read = function() {
        return output;
      };

      this.write = function(str) {
        return (output = str);
      };

      this.append = function(str) {
        return (output += str);
      };

    };

    return Output;
});