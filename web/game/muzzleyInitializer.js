var util = require('util');
var requirejs = require('requirejs');
io = require('socket.io-client');
var jsdom = require('jsdom');
document = jsdom.jsdom('<html><body></body></html>');
window = document.createWindow();

info = function() {};
// Play sound...
play = function() {};
kill = function(p1, p2) {
//  console.log(arguments);
};

//window.location = 'https://localhost:8443/';

//document = window.document;

requirejs.config({
  baseUrl: __dirname,
  //Pass the top-level main.js/index.js require
  //function to requirejs so that node modules
  //are loaded relative to the top-level JS file.
  nodeRequire: require
});

requirejs(['js/app'],
  function   (app) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
    //console.log(app);
});


setTimeout(function() {
  console.log("Game:");
  console.log(util.inspect(Game));
}, 1000);

