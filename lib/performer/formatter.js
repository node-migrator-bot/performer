define([

    'performer/transform/serialize',
    'performer/transform/wrap',
    'performer/transform/label'

  ],
  function(Serialize, Wrap, Label) {

    var Formatter = {};

    Formatter.standard = {
      group_pipeline: [(new Wrap.ol()), (new Wrap.fieldset())],
      tag_pipeline: [(new Serialize.standard()), (new Wrap.li())]
    };

    return Formatter;

});