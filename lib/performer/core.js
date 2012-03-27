// Standing on the shoulders of giants.  This core functionality is
// lifted from documentcloud's Underscore.  Eventually there will be
// multiple builds making it possible to use Underscore proper if it
// is present.
define(function() {

  var nativeforEach = Array.prototype.forEach,
      nativeIndexOf = Array.prototype.indexOf,
      nativeFilter = Array.prototype.filter,
      nativeMap = Array.prototype.map,
      nativeIsArray = Array.isArray,
      core = {};

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  core.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  core.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Escape a string for HTML interpolation.
  core.escape = function(string) {
    return (''+string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
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

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  core.filter = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    core.each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  core.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    core.each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Trim out all falsy values from an array.
  core.compact = function(array) {
    return core.filter(array, function(value){ return !!value; });
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

  return core;
});