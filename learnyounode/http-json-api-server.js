const http = require('http');
const url = require('url');

let portNumber = process.argv[2];
const parseTimeRegex = /^\/api\/parsetime/;
const unixTimeRegex = /^\/api\/unixtime/;

function parseTime(date){
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function unixTime(date){
    return { unixtime: date.getTime() };
}

const server = http.createServer(function (req, res) {
    const parsedUrl = new URL(req.url, 'http://localhost');
    const date = new Date(parsedUrl.searchParams.get('iso'));
    
    let data;
    if (parseTimeRegex.test(req.url)) {
        data = parseTime(date);
    } else if (unixTimeRegex.test(req.url)) {
        data = unixTime(date);
    }

    if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    res.writeHead(404);
    res.end();
});

server.listen(portNumber);