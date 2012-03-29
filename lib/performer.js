define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Blueprint = require('performer/blueprint');
  Performer.Schema = require('performer/schema');
  Performer.Tag = require('performer/tag');
  Performer.Pipeline = require('performer/pipeline');
  Performer.Output = require('performer/output');
  Performer.Form = require('performer/form');

  Performer.Transform = {};
  Performer.Transform.Serialize = require('performer/transformers/serialize');
  Performer.Transform.Wrap = require('performer/transformers/wrap');
  Performer.Transform.Label = require('performer/transformers/label');

  // Prepare some default Blueprints
  Performer.Blueprints = {};
  Performer.Blueprints.html5 =
    new Performer.Blueprint(require('performer/blueprints/html5'));

  // Prepare some standard Pipelines
  Performer.Pipelines = {};
  Performer.Pipelines.bare =
    new Performer.Pipeline([Performer.Transform.Serialize.standard],[]);

  // TOOD: get the right pipeline in for bootstrap compliance
  Performer.Pipelines.bootstrap =
    new Performer.Pipeline([Performer.Transform.Serialize.standard],[]);

  return Performer;

});