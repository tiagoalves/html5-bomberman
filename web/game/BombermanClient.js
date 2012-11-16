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

var BombermanClient = function () {
  requirejs.config({
    baseUrl: __dirname,
    nodeRequire: require
  });

  requirejs(['js/app'],
    function (app) {
    }
  );
}

BombermanClient.prototype.keySimulator = keySimulator;

setTimeout(function() {
  keySimulator.keydown(KeySimulator.UP);
}, 1000);

setTimeout(function() {
  keySimulator.keyup(KeySimulator.UP);
  keySimulator.keydown(KeySimulator.LEFT);
}, 5000);

exports = module.exports = BombermanClient;