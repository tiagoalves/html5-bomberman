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


TILE_EMPTY = 0;
TILE_BRICK = 1;
TILE_SOLID = 2;

var BombermanClient = function (options) {

  options = options || {};
  var characters = ['john','joe','betty','mary'];

  requirejs.config(
    {
        baseUrl: "js",
        paths: {
            "backbone": "lib/backbone",
            "underscore": "lib/underscore",
            "text": "lib/text"
        },
        locale: "en"
    }
  );



  requirejs([
    "jquery", "underscore", "backbone",
    "polyfills/jscript",
    "Game"
  ],function($, _, Backbone, core) {

    var startGame = function(/*e*/) {
      var name = options.name || 'John Doe';
      var game = options.game || 'game1';
      var character = characters[Math.floor(Math.random()*characters.length)];

      console.log("Joining " + game);

      new Game({
          playerName: name,
          fbuid: undefined,
          character: character,
          game: game
      });
    }

    /**
     * Initialize
     */
    $(function() {
      startGame(options);
    });
  });

/*
  requirejs.config({
    baseUrl: __dirname,
    nodeRequire: require
  });

  requirejs(['js/app', 'js/Game'],
    function (app, Game) {


      console.log("app returned:");
      console.log(arguments);
      console.log(Game);
    }
  );
*/

}

BombermanClient.prototype.keySimulator = keySimulator;

setTimeout(function() {
//  keySimulator.keydown(KeySimulator.UP);
}, 1000);

setTimeout(function() {
//  keySimulator.keyup(KeySimulator.UP);
//  keySimulator.keydown(KeySimulator.LEFT);
}, 5000);

exports = module.exports = BombermanClient;