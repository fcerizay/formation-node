const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
    const string = data.toString();
    console.log(string.split('\n').length - 1);
})