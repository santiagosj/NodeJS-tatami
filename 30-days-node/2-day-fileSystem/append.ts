import fs from "fs";

let data_append = "me I'm not\n";
let more_data = "sync data appended\n"

fs.appendFile("./textFile.txt", data_append, (err: any) => {
    if (err) throw err;
    console.log('done');
});

fs.appendFileSync("./textFile.txt", more_data);
console.log("file written");
