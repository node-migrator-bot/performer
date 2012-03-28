define([

  ],
  function() {

    var Output = function(output) {

      this.output = output||'';

      this.read = function() {
        return this.output;
      };

      this.write = function(str) {
        return (this.output = str);
      };

      this.append = function(str) {
        return (this.output += str);
      };

    };

    return Output;
});