const fs = require('fs');
//readFile recibe dos parametros, el primero es el archivo a leer y el segundo una funcion de callback que recibe el posible error y los datos del archivo a leer;

fs.readFile('./archivo1.txt', (error, datos)=>{
  if (error) {
    console.log(error);
  }else{
    console.log(datos.toString());
  }
});
console.log('última linea del programa');
