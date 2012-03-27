define([

    'performer/core',
    'performer/klass',
    'performer/tag'

  ],
  function(_, klass, Tag) {

    var Wrapper = function() {};
    Wrapper.extend = klass.extend;

    Wrapper.standard = Wrapper.none = Wrapper.extend({
      invoke: function(tag) { return tag; }
    });
    Wrapper.li = Wrapper.extend({
      invoke: function(tag) { return "<li>"+tag+"</li>"; }
    });
    Wrapper.p = Wrapper.extend({
      invoke: function(tag) { return "<p>"+tag+"</p>"; }
    });
    Wrapper.div = Wrapper.extend({
      invoke: function(tag) { return "<div>"+tag+"</div>"; }
    });
    Wrapper.span = Wrapper.extend({
      invoke: function(tag) { return "<span>"+tag+"</span>"; }
    });

    return Wrapper;

});