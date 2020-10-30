const mymodule = require('./mymodule.js');

const dirName = process.argv[2];
const extension = process.argv[3];

mymodule(dirName, extension, function (err, data) {
    if (err) {
        throw err;
    }
    data.forEach(function (file) {
        console.log(file);
    })
});