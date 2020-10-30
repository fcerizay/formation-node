const http = require('http');
const map = require('through2-map');

let portNumber = process.argv[2];

const server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase('');
  })).pipe(res)

})
server.listen(portNumber);