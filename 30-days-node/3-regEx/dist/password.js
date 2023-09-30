"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = 'Aa#1aaabcde';
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
;
let res = str.match(pattern);
if (res) {
    console.log("Valid password");
}
else {
    console.log("Not a valid password");
}
