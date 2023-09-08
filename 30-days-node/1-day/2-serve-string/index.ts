import * as http from 'http'

var host = '127.0.0.1'
var port = 3001

var server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Serve this string"); // <-- localhost:3001
    response.end();
});

export const ServeString = () => server.listen(port, () => {
    console.log(`Serve-string corriendo en ${host}:${port}`);
});	