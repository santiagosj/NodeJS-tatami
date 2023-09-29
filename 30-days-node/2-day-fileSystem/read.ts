import fs from 'fs';

// async
fs.readFile('./textFile.txt', (err, data) => {
    if (err) throw err;
    console.log("Async content: " + data);
})

//sync 
const content = fs.readFileSync('./textFile.txt');
console.log("Sync content: " + content);