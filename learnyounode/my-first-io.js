const fs = require('fs');

const filePath = process.argv[2];

buffer = fs.readFileSync(filePath);
console.log(buffer.toString().split('\n').length - 1);