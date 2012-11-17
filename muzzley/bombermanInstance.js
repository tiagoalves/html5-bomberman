var BombermanClient = require('./BombermanClient');
var bomberman = new BombermanClient();


var suicideTimer = null;
var suicide = function () {
  console.log("Killing myself"); 
  process.disconnect();
  process.exit();
};
// If in 20s no message is received, exit
var postponeSuicide = function() {
  if (suicideTimer) {
    clearTimeout(suicideTimer);
  }
  suicideTimer = setTimeout(suicide, 20000);
};
postponeSuicide();


process.on('uncaughtException', suicide);

process.on('message', function (response) {
  if (response.direction && response.key) {
    if (response.direction === 'down') {
      bomberman.keySimulator.keydown(response.key);
    } else {
      bomberman.keySimulator.keyup(response.key);
    }
  }

  // A message was received, postpone the suicide another 20 seconds
  postponeSuicide();
});
