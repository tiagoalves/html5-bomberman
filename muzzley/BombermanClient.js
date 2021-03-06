var util = require('util');
var requirejs = require('requirejs');
var KeySimulator = require('./KeySimulator');
var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
io = require('socket.io-client');
var jsdom = require('jsdom');
document = jsdom.jsdom('<html><body></body></html>');
window = document.createWindow();

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

  this.keySimulator = new KeySimulator();
  var ks = this.keySimulator;

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

    console.log("====== STARTING A NEW GAME ==========");

    var startGame = function(/*e*/) {
      var name = options.name || 'Codebits';
      var game = options.game || 'game1';
      var character = characters[Math.floor(Math.random()*characters.length)];

      console.log("Joining " + game);

      new Game({
          playerName: name,
          fbuid: undefined,
          character: character,
          game: game,
          keySimulator: ks
      });
    }

    /**
     * Initialize
     */
    $(function() {
      startGame(options);
    });
  });

}

//BombermanClient.prototype.keySimulator =  keySimulator;

exports = module.exports = BombermanClient;
