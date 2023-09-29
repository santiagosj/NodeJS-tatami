"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
// async
fs.readFile('./textFile.txt', (err, data) => {
    if (err)
        throw err;
    console.log("Async content: " + data);
});
//sync 
const content = fs.readFileSync('./textFile.txt');
console.log("Sync content: " + content);
