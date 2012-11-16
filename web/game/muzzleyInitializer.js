var util = require('util');
var requirejs = require('requirejs');
var KeySimulator = require('./KeySimulator');
var $ = require('jquery');
io = require('socket.io-client');
var jsdom = require('jsdom');
document = jsdom.jsdom('<html><body></body></html>');
window = document.createWindow();

var keySimulator = new KeySimulator(document);

//
// Fix the supposedly global methods of the game but which are not because of CommonJS
//
// info was chat related
info = function() {};
// just inform that someone was killed by some other guy
kill = function() {};
// inform that someone suicided
suicide = function() {};
// chat with the group
chat = function() {};
// Play sound...
play = function() {};

requirejs.config({
  baseUrl: __dirname,
  //Pass the top-level main.js/index.js require
  //function to requirejs so that node modules
  //are loaded relative to the top-level JS file.
  nodeRequire: require
});

requirejs(['js/app'],
  function (app) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
    //console.log(app);
});

setTimeout(function() {
  keySimulator.keydown(KeySimulator.UP);
}, 1000);

setTimeout(function() {
  keySimulator.keyup(KeySimulator.UP);
  keySimulator.keydown(KeySimulator.LEFT);
}, 5000);

