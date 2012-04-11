define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Blueprint = require('performer/blueprint');
  Performer.Schema = require('performer/schema');
  Performer.Tag = require('performer/tag');
  Performer.Pipeline = require('performer/pipeline');
  Performer.Pipeline.Helpers = require('performer/pipeline_helpers');
  Performer.Form = require('performer/form');

  Performer.Transform = {};
  Performer.Transform.Serialize = require('performer/transformers/serialize');
  Performer.Transform.Wrap = require('performer/transformers/wrap');
  Performer.Transform.Sibling = require('performer/transformers/sibling');

  // Prepare some default Blueprints
  Performer.Blueprints = {};
  Performer.Blueprints.html5 = function() { return require('performer/blueprints/html5'); };

  // Prepare some standard Pipelines
  Performer.Pipelines = {};
  Performer.Pipelines.bare = function() { return require('performer/pipelines/bare'); };
  Performer.Pipelines.bootstrap = function() { return require('performer/pipelines/bootstrap'); };
  Performer.Pipelines.semantic = function() { return require('performer/pipelines/semantic'); };

  return Performer;

});
