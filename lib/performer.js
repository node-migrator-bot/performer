define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Type = require('performer/type');
  Performer.Schema = require('performer/schema');
  Performer.Tag = require('performer/tag');
  Performer.Pipeline = require('performer/pipeline');
  Performer.Output = require('performer/output');
  Performer.Form = require('performer/form');

  Performer.Transform = {};
  Performer.Transform.Serialize = require('performer/transform/serialize');
  Performer.Transform.Wrap = require('performer/transform/wrap');
  Performer.Transform.Label = require('performer/transform/label');

  return Performer;
});