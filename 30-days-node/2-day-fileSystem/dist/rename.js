"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//async
// fs.rename("./textFile.txt", "new_textFileName.txt", (err) => {
//     if (err) throw new Error("Error while renaming file");
//     console.log("Renamed");
// })
//sync
fs_1.default.renameSync("./new_textFileName.txt", "new_textFile2.txt");
console.log('Done');
