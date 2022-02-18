const http = require('http');
const url = require('url');

var servidor = http.createServer((req, res)=>{
  var objetourl = url.parse(req.url);

  console.log('camino completo del recurso y parametros: ' + objetourl.path);
  console.log('solo el camino y el nombre del recurso: ' + objetourl.pathname);
  console.log('parametros del recurso: ' +objetourl.query);

  res.writeHead(200, {'Content-Type':'text/html'});
  res.write('<!doctype html><html><head></head><body>Hola mundo</body></html>');
  res.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');
