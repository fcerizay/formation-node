const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
var count = urls.length;

const result = [];
for (let i = 0; i < urls.length; i++) {

    http.get(urls[i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.error("error");
            }
            result[i] = data.toString();

            count--;
            if (count === 0) {
                for (let i = 0; i < result.length; i++) {
                    console.log(result[i]);
                };
            }
        }))
    });
};