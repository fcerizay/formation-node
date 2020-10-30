const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        console.log(data.length);
        console.log(data.toString());
    }))
});