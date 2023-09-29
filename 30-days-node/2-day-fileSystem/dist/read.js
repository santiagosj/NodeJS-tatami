"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// async
fs_1.default.readFile('./textFile.txt', (err, data) => {
    if (err)
        throw err;
    console.log("Async content: " + data);
});
//sync 
const content = fs_1.default.readFileSync('./textFile.txt');
console.log("Sync content: " + content);
