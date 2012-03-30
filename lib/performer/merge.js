// written by andrew dupont, optimized by addy osmani
define(function() {

  var merge = function (destination, source) {

    var toString = Object.prototype.toString,
         objTest = toString.call({});

    for(var property in source) {
      if(source[property] && objTest == toString.call(source[property])) {
        destination[property] = destination[property] || {};
        merge(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  };

  return merge;

});