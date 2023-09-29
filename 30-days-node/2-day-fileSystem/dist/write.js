"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let contentAsync = "fuck everthing that you stand for...\n";
let contentSync = "so.. fuck this world...\n";
// async
fs_1.default.writeFile("./textFile.txt", contentAsync, (err) => {
    if (err)
        throw err;
    console.log('It\'s Saved!');
});
// sync
fs_1.default.writeFileSync("./textFile.txt", contentSync);
console.log("File sync written!");
