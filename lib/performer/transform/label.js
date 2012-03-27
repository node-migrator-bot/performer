define([

    'performer/core',
    'performer/klass'

  ],
  function(_, klass) {

    var Label = function() {

      this.LABEL_AFTER = ['radio','checkbox'];

    };
    // Allow this constructor to be extended and the methods within overridden.
    Label.extend = klass.extend;

    Label.standard = Label.extend({});

    return Label;

});