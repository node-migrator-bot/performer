define([

    'performer/transform/serialize',
    'performer/transform/wrap',
    'performer/transform/label'

  ],
  function(Serialize, Wrap, Label) {

    var Formatter = {};

    Formatter.standard = {
      tag_pipeline: [Serialize.standard, Wrap.li],
      group_pipeline: [Wrap.ol, Wrap.fieldset]
    };

    return Formatter;

});