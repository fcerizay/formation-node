const Promise  = require('bluebird');
const fs = require('fs');

// Exercice 1.1
/*
var promise = new Promise(function(resolve, reject) {
    fs.readFile(__filename,function(error,result){
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    })
}).then(function(result) {
    console.log(result.toString());
}).catch(function(error) {
    console.error(error);
});
*/

// Exercice 1.2
/*
var readFile = Promise.promisify(fs.readFile);
readFile(__filename)
.then(function(result) {
    console.log(result.toString());
}).catch(function(error) {
    console.error(error);
});
*/

// Exercice 1.3

Promise.promisifyAll(fs);
fs.readFileAsync(__filename,'utf8')
.then(function(result) {
    console.log(result.toString());
}).catch(function(error) {
    console.error(error);
});

