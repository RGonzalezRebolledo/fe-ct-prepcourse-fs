function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

var suma = 0;

    for (var i = 0; i <= n; i++){
 
    suma += (i);
       
    if (suma > 100){
      break;
     }

  }
  return suma
}
module.exports = sumarHastaNConBreak;

console.log (sumarHastaNConBreak(15))

// NOTA: este test no devuelve el valor correcto cuando n = 20