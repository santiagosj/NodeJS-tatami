import fs from "fs";

//async
fs.unlink("./new_textFile2.txt", (err) => {
    if (err) throw err;
    console.log("file deleted");
});

//sync 
// fs.unlinkSync("path_to_file")
// console.log("file deleted sync");
