"use strict";
console.count('default');
console.count('doom'); //remo=1
console.count('doom'); //remo=2
console.count('rj'); //rj=1
console.countReset('doom'); //remo = 1
console.count('doom'); //remo=2
console.countReset('doom'); //remo=1
console.count('rj'); //rj=2
console.count();
