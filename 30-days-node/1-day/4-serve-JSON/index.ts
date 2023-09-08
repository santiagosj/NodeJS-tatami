import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { error } from 'console';

const host = '127.0.0.1'
const port = 3003
const archivo = path.join(__dirname + '/myJson.json');

export const JSONserver = () => http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile(archivo, 'utf8', (err, data) => {
        if (err) throw error;
        res.end(JSON.stringify(data))
    })
    //res.end('{"name":"JSON server"}');
}).listen(port, () => {
    console.log(`Serve-JSON corrinedo en ${host}:${port}`);
})