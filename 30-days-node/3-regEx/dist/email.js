"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = 'rjbitdemo@gmail.com';
let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let res = str.match(pattern);
if (res) {
    console.log("Valid email address");
}
else {
    console.log("Please enter a valid email address");
}
