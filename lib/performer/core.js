// Standing on the shoulders of giants.  This core functionality is
// lifted from documentcloud's Underscore and Backbone.
define(function() {

  var nativeforEach = Array.prototype.forEach,
      nativeIndexOf = Array.prototype.indexOf,
      nativeMap = Array.prototype.map,
      nativeIsArray = Array.isArray,
      core = {};

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  core.uniqueID = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  core.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  core.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given value a string?
  core.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  // Has own property?
  core.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  core.isEmpty = function(obj) {
    if (obj == null) return true;
    if (core.isArray(obj) || core.isString(obj)) return obj.length === 0;
    for (var key in obj) if (core.has(obj, key)) return false;
    return true;
  };

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  core.each = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeforEach && obj.forEach === nativeforEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (core.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  core.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    core.each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    if (obj.length === +obj.length) results.length = obj.length;
    return results;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  core.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    core.each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // extend a given object with all the properties in passed-in object(s).
  core.extend = function(obj) {
    core.each(Array.prototype.slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Shared empty constructor function to aid in prototype-chain creation.
  core.ctor = function(){};

  // The self-propagating extend function that Form classes use.
  core.extend_class = function (protoProps, classProps) {
    var child = core.inherits(this, protoProps, classProps);
    child.extend = core.extend_class;
    return child;
  };

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  core.inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;

    } else {
      child = function(){ parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    core.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    core.ctor.prototype = parent.prototype;
    child.prototype = new core.ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) core.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) core.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
  };

  return core;

});