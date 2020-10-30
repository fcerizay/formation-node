const fs = require('fs');

fs.readdir(__dirname,function(error,files) {
    if (error) {
        console.log('Echec');
    } else {
        console.log(files);
    }
});