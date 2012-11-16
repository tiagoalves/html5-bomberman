
var io = require("socket.io-client");
var socket = io.connect('https://localhost:8443/game1');

socket.on('connect', function () {
  console.log("socket connected");
});
socket.on('custom event', function () {
  console.log("custom event");
});
socket.on('disconnect', function () {
  console.log("disconnect");
});


socket.emit('join', {
  id: 123,
  fbuid: "2223",
  name: "weee",
  character: "zz"
});
