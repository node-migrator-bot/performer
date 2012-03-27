define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.core = require('performer/core');
  Performer.klass = require('performer/klass');
  Performer.Form = require('performer/form');
  Performer.Serializer = require('performer/serializer');
  Performer.Wrapper = require('performer/wrapper');
  Performer.Tag = require('performer/tag');

  return Performer;
});