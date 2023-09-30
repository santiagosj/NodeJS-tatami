"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = 'FFFFFF';
let pattern = /^[a-fA-F0-9]+$/g;
let res = str.match(pattern);
if (res) {
    console.log("Valid Hexadecimal number");
}
else {
    console.log("Not a valid Hexadecimal number");
}
