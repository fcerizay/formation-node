const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const extension = '.'+process.argv[3];

fs.readdir(dirName, function (err, list) {
    list.forEach(fileName => {
        if(path.extname(fileName) === extension)
            console.log(fileName);
    }); 
})