define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Blueprint = require('performer/blueprint');
  Performer.Schema = require('performer/schema');
  Performer.Helpers = require('performer/helpers');
  Performer.Tag = require('performer/tag');
  Performer.Pipeline = require('performer/pipeline');

  Performer.Serializer = {};
  Performer.Serializer.standard = require('performer/serializers/standard');

  Performer.Transform = {};
  Performer.Transform.Wrap = require('performer/transformers/wrap');
  Performer.Transform.Sibling = require('performer/transformers/sibling');

  // Prepare some default Blueprints.
  Performer.Blueprints = {};

  // Return a new copy each time this is invoked.
  Performer.Blueprints.html5 = function() { return new Performer.Blueprint(require('performer/blueprints/html5')); };

  // Prepare some standard Pipelines
  Performer.Pipelines = {
    bare: [],
    semantic: require('performer/pipelines/semantic'),
    bootstrap: require('performer/pipelines/bootstrap')
  };

  // Entry point for library
  Performer.Form = require('performer/form')(Performer);

  return Performer;

});
