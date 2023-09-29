"use strict";
const fs = require("fs");
let contentAsync = "so.. fuck this world...";
let contentSync = "fuck everthing that you stand for...";
// async
fs.writeFile("./textFile.txt", contentAsync, (err) => {
    if (err)
        throw err;
    console.log('It\'s Saved!');
});
// sync
fs.writeFileSync("./textFile.txt", contentSync);
console.log("File sync written!");
