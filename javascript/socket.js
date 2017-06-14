/* //got from client-side github tutorial (https://github.com/socketio/socket.io-client/blob/master/test/index.js); no idea what it does
require('./connection');
require('./socket'); */
/*
var socket = new io.connect();

//add connect listener
socket.on('connect', function() {
   console.log("CLIENT HAS CONNECTED"); 
});

//add disconnect listener
socket.on('disconnect',function() {
	console.log('The client has disconnected!');
    localStorage.removeItem("lastSongName");
    localStorage.removeItem("lastTime");
}); */
//CAN YOU DO THIS??? Essentially trying to use client side to detect disconnection by client side to server; should be accessing server, doing it from there;;;; --- HOW DO YOU DO THIS???

/*
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('disconnect', function(){
      localStorage.removeItem("lastSongName");
    localStorage.removeItem("lastTime");
  });
});
server.listen(3000); */