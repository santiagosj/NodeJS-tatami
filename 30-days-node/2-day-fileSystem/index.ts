const fs = require('fs');

// async
fs.readFile('./textFile.txt', (err: any, data: string) => {
    if (err) throw err;
    console.log("Async content: " + data);
})

//sync 
const content = fs.readFileSync('./textFile.txt');
console.log("Sync content: " + content);

export { }