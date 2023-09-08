import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const host = '127.0.0.1';
const port = 3002;
const archivo = path.join(__dirname + '/index.html')

export const HtmlServer = () => http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile(archivo, (err, data) => {
        if (err) throw err;
        res.end(data);
    })

}).listen(port, () => {
    console.log(`Serve HTML corriendo en ${host}:${port}`);
})