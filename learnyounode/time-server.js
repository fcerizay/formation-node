const net = require('net');

const portNumber = process.argv[2];

function formatDate(date){
    return date.getFullYear() + "-" +
        Number(date.getMonth() + 1) + "-" +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes()
    ;
}

const server = net.createServer(function (socket) {
    socket.end(formatDate(new Date()) + '\n');
})
server.listen(portNumber);