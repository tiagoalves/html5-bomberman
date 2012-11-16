var document = null;

var KeySimulator = function(_document) {
  document = _document;
  setupDocumentKeyDown(document);
};

KeySimulator.LEFT = 37;
KeySimulator.UP = 38;
KeySimulator.RIGHT = 39;
KeySimulator.DOWN = 40;
KeySimulator.SPACE = 32;

KeySimulator.prototype.keydown = function(code) {
  document.keydown(getKeyEvent(code));
};

KeySimulator.prototype.keyup = function(code) {
  document.keyup(getKeyEvent(code));
};

var getKeyEvent = function(code) {
  return {
    keyCode: code,
    stopImmediatePropagation: function(){},
    preventDefault: function(){}
  };
}

var setupDocumentKeyDown = function(doc) {
  // Set the keydown and keyup methods that handle and trigger
  // the respective key events
  ['keydown', 'keyup'].forEach(function (type) {
    doc[type] = function(arg) {
      if (typeof arg === "function") {
        doc['on' + type] = arg;
      } else if (typeof doc['on' + type] === "function") {
        // Event fired, call the callback previously stored
        doc['on' + type](arg);
      }
    };
  });
};

exports = module.exports = KeySimulator;