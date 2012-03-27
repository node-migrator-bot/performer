define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.core = require('performer/core');
  Performer.klass = require('performer/klass');

  Performer.Form = require('performer/form');
  Performer.Tag = require('performer/tag');
  Performer.Formatter = require('performer/formatter');

  Performer.Transform = {};
  Performer.Transform.Serialize = require('performer/transform/serialize');
  Performer.Transform.Wrap = require('performer/transform/wrap');
  Performer.Transform.Label = require('performer/transform/label');

  return Performer;
});