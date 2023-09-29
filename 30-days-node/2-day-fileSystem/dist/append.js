"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let data_append = "me I'm not\n";
let more_data = "sync data appended\n";
fs_1.default.appendFile("./textFile.txt", data_append, (err) => {
    if (err)
        throw err;
    console.log('done');
});
fs_1.default.appendFileSync("./textFile.txt", more_data);
console.log("file written");
