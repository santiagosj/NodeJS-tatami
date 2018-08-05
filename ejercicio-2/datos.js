const os = require('os');

console.log('Sistema operativo: ' + os.platform());

console.log('Directorio temporal: ' + os.tmpdir());

console.log('Memoria total: ' + os.totalmem());

console.log('Total memoria libre: ' + os.freemem());

console.log('Arquitectura del os CPU: ' + os.arch());

console.log('Version del sistema operativo: ' + os.release());

//consultar por todos los metodos os!
