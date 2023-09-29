import fs from "fs";

let contentAsync = "fuck everthing that you stand for...\n";
let contentSync = "so.. fuck this world...\n";

// async
fs.writeFile("./textFile.txt", contentAsync, (err: any) => {
    if (err) throw err;
    console.log('It\'s Saved!');
})

// sync
fs.writeFileSync("./textFile.txt", contentSync);
console.log("File sync written!");
