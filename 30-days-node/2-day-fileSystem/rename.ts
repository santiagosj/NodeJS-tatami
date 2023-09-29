import fs from "fs";

//async
// fs.rename("./textFile.txt", "new_textFileName.txt", (err) => {
//     if (err) throw new Error("Error while renaming file");
//     console.log("Renamed");
// })

//sync
fs.renameSync("./new_textFileName.txt", "new_textFile2.txt");
console.log('Done');