var pi= 3.14;

function suma(x1 , x2){
   return x1 + x2;
}

function resta(x1, x2) {
  return x1 - x2;
}

function division(x1, x2) {
  if (x2 == 0) {
      return errorDivision()
  }else {
      return x1 / x2;
  }
}

function multiplicacion(x1, x2) {
  return x1 * x2;
}

function errorDivision() {
  console.log("La division no es realizable!");
}

exports.suma = suma;
exports.resta = resta;
exports.division = division;
exports.multiplicacion = multiplicacion;
exports.pi = pi;
