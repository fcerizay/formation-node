const fs = require('fs');

// exercice 1
/*
process.stdin.on('data', (prenom) => {
    console.log(`Bonjour ${prenom}`);
});

console.log(process.platform);
console.log(process.env);
console.log(__dirname);
console.log(process.pid);
*/

// exercice 2

fs.readFile(__filename,function(error,result){
    console.log(result.toString());
});
