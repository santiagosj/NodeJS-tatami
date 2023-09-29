"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//async
fs_1.default.unlink("./new_textFile2.txt", (err) => {
    if (err)
        throw err;
    console.log("file deleted");
});
