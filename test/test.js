var chai = require('chai');
var expect = chai.expect;
var net = require('net');
var glob = require('glob');
var text = "Test Test Test";

describe('sending text and looking for files', function() {
  it('should receive text and save it to a file with a unique name', function () {
    client = net.connect(3000, function () {
      client.write(text);
    });
    client.on('end', function () {
      console.log('disconnected at the moment');
    });
    
    glob('*.txt', function (err, files) {
      if (err) {
        console.log('error finding files');
      }
      console.log(files);
      return files;
    });
  });
});