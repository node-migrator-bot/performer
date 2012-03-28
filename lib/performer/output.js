define([

  ],
  function() {

    var Output = function() {

      this.output = "";

      this.read = function() {
        return this.output;
      };

      this.write = function(str) {
        return (this.output = str);
      };

      this.append = function(str) {
        return (this.output += str);
      }

    };

    return Output;
});