const http = require('http');

const servidor = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!doctype html><html><head></head>'+'<body><h1>Este sitio esta en desarrollo</h1></body></html>');

  res.end();
});

servidor.listen(8888);

console.log('Servidor Web Iniciado');
