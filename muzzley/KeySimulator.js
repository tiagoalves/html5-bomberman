var EventEmitter = require('events').EventEmitter;
var util = require('util');

var KeySimulator = function() {
  EventEmitter.call(this);
};
util.inherits(KeySimulator, EventEmitter);

KeySimulator.LEFT = 37;
KeySimulator.UP = 38;
KeySimulator.RIGHT = 39;
KeySimulator.DOWN = 40;
KeySimulator.SPACE = 32;

KeySimulator.prototype.keydown = function(code) {
  this.emit('keydown', getKeyEvent(code));
};

KeySimulator.prototype.keyup = function(code) {
  this.emit('keyup', getKeyEvent(code));
};

var getKeyEvent = function(code) {
  return {
    keyCode: code,
    stopImmediatePropagation: function(){},
    preventDefault: function(){}
  };
}

exports = module.exports = KeySimulator;