const fs = require('fs');

fs.writeFile('./archivo1.txt','Linea 1 Hi! desde archivo1 creado con fs \nLinea 2 goodbye! desde archivo1 creado con fs', (error)=>{
  if (error)
      console.log(error);
  else
      console.log('El archivo fué creado');
});

console.log('Esta es la ultima linea del programa, que se imprime aunque la funcion aun no se ejecute.');
