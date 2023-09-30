"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// literal
const reg = /ab*/;
//constructor
const constructorReg = new RegExp('ab*');
// Both will match a , ab, abb , abbbbbb , abbbbbbb and so on.
// But will not match b, bc, abc,aba , etc.
let filename = './data.html'; //'./data.txt'
let str = fs_1.default.readFileSync(filename).toString();
let pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim; // /vengeance/gim;
let arr = str.match(pattern);
let len = arr === null || arr === void 0 ? void 0 : arr.length;
console.log(`The number of matches is ${len}`);
