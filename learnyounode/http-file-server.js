const http = require('http');
const fs = require('fs');

let portNumber = process.argv[2];
let fileLocation = process.argv[3];

const server = http.createServer(function (req, res) {
    src = fs.createReadStream(fileLocation);
    src.pipe(res);
})
server.listen(portNumber);