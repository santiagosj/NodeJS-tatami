import * as ws from 'fs'
import { Console } from 'console';

const output = ws.createWriteStream('./stdout.log');
const outerr = ws.createWriteStream('./stderr.log')

const print = new Console(output, outerr);

const myNameIs = 'Santi';
print.info(`Hello ${myNameIs}`);
print.log(`my name is ${myNameIs}`);