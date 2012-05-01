define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Tag = require('performer/tag');
  Performer.Schema = require('performer/schema');
  Performer.Helpers = require('performer/helpers');
  Performer.Blueprint = require('performer/blueprint');
  Performer.Transformer = require('performer/transformer');

  // Built-in Blueprints
  Performer.Blueprints = {};
  Performer.Blueprints.html5 = function() {
    return new Performer.Blueprint(require('performer/blueprints/html5'));
  };

  // Built-in Serializers
  Performer.Serializers = {};
  Performer.Serializers.standard = require('performer/serializers/standard');

  // Built-in Transformers
  Performer.Transformers = {};
  Performer.Transformers.Wrap = require('performer/transformers/wrap');
  Performer.Transformers.Sibling = require('performer/transformers/sibling');

  // Built-in Pipelines
  Performer.Pipelines = {
    bare: [],
    semantic: require('performer/pipelines/semantic'),
    bootstrap: require('performer/pipelines/bootstrap')
  };

  // Entry Point
  Performer.Form = require('performer/form')(Performer);

  return Performer;

});
