import * as http from 'http'

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log("Simple server funcionando");
    res.end('Simple server funcionando');
})

export const SimpleServer = () => server.listen(port, () => {
    console.log(`Simple Server corriendo en ${host}:${port}`);
})

