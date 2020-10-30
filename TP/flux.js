const fs = require('fs');

const [input,output] = [process.argv[2],process.argv[3]];

fs.createReadStream(input).pipe(fs.createWriteStream(output));
