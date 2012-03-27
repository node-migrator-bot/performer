define([

    'performer/klass',
    'performer/tag'

  ],
  function(klass, Tag) {

    var Labeler = function() {

      this.invoke = function(tag) {
        return tag;
      };

    };

    // Allow this constructor to be extended and the methods within overridden.
    Labeler.extend = klass.extend;

    Wrapper.standard = Wrapper.extend({});

    return Wrapper;

});