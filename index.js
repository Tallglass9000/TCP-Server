var net = require('net');
var fs = require('fs');
var uuid = require('uuid');

var server = net.createServer(function(socket) {
  var incomingData = "";

  socket.on('data', function(data) {
    console.log(data.toString());

    var dataString = data.toString();
    if (data) {
      incomingData += dataString;
    }
  });

  socket.on('end', function() {
    console.log('disconnected');

    var createdFile = fs.createWriteStream(uuid.v1() + '.txt');
    createdFile.write(incomingData);
    createdFile.end();
  });
});

server.listen(3000);