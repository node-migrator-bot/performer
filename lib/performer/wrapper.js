define([

    'performer/core',
    'performer/tag'

  ],
  function(core, Tag) {

    var Wrapper = function() {


    };
    Wrapper.extend = core.extend_class;


    Wrapper.standard = Wrapper.extend({});

    return Wrapper;

});