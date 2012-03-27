define(function(require) {

  var Performer = {
    VERSION: '0.0.1'
  };

  Performer.core = require('performer/core');
  Performer.Form = require('performer/form');
  Performer.Serializer = require('performer/serializer');
  Performer.Tag = require('performer/tag');

  return Performer;
});