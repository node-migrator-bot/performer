var fs = require('fs');
var requirejs = require('requirejs');
var jasmine = require('../vendor/jasmine-1.2.0/jasmine').jasmine;
var jasmine_console = require('../vendor/jasmine_console').jasmine_console;

// configure requirejs
requirejs.config({
  nodeRequire: require,
  baseUrl: __dirname,
  paths: { performer: '../lib/performer' }
});

// make define available globally like it is in the browser
global.define = require('requirejs');

// make jasmine available globally like it is in the browser
global.describe = require('../vendor/jasmine-1.2.0/jasmine').describe;
global.it = require('../vendor/jasmine-1.2.0/jasmine').it;
global.expect = require('../vendor/jasmine-1.2.0/jasmine').expect;

// load specs
fs.readdirSync(__dirname+'/spec').map(function(spec) {
  requirejs([__dirname+'/spec/'+spec],function(spec){});
});

// run em
jasmine.getEnv().addReporter(new jasmine_console());
jasmine.getEnv().execute();
