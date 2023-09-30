import fs from 'fs'
// literal
const reg = /ab*/

//constructor
const constructorReg = new RegExp('ab*');

// Both will match a , ab, abb , abbbbbb , abbbbbbb and so on.
// But will not match b, bc, abc,aba , etc.

let filename = './data.html' //'./data.txt'
let str = fs.readFileSync(filename).toString();
let pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim; // /vengeance/gim;
let arr = str.match(pattern)
let len = arr?.length
console.log(`The number of matches is ${len}`)