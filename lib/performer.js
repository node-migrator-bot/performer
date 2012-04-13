define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.Blueprint = require('performer/blueprint');
  Performer.Schema = require('performer/schema');
  Performer.Tag = require('performer/tag');
  Performer.Pipeline = require('performer/pipeline');
  Performer.Pipeline.Helpers = require('performer/pipeline_helpers');

  Performer.Transform = {};
  Performer.Transform.Serialize = require('performer/transformers/serialize');
  Performer.Transform.Wrap = require('performer/transformers/wrap');
  Performer.Transform.Sibling = require('performer/transformers/sibling');

  // Prepare some default Blueprints.
  Performer.Blueprints = {};

  // Return a new copy each time this is invoked.
  Performer.Blueprints.html5 = function() { return new Performer.Blueprint(require('performer/blueprints/html5')); };

  // Prepare some standard Pipelines
  Performer.Pipelines = {
    tag: {
      bare: require('performer/pipelines/bare')['tag'],
      semantic: require('performer/pipelines/semantic')['tag'],
      bootstrap: require('performer/pipelines/bootstrap')['tag'],
      bootstrap_group: require('performer/pipelines/bootstrap')['group']
    },
    set: {
      bare: require('performer/pipelines/bare')['set'],
      semantic: require('performer/pipelines/semantic')['set'],
      bootstrap: require('performer/pipelines/bootstrap')['set'],
      bootstrap_group: require('performer/pipelines/bootstrap')['group']
    }
  };

  // Entry point for library
  Performer.Form = require('performer/form')(Performer);

  return Performer;

});
