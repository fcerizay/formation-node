const fs = require('fs');
const path = require('path');

module.exports = function (dirName, extension, callback) {
    fs.readdir(dirName, function (err, list) {
        if (err) {
            return callback(err);
        }
        list = list.filter(function (fileName) {
            return path.extname(fileName) === '.' + extension;
        });
        callback(null, list);
    })
};