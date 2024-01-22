function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

var suma = 0;
if (n > 100){
  n = 100;
}
    for (var i = 0; i <= n; i++){
  
    suma += (i);
  }
  return suma
}
module.exports = sumarHastaNConBreak;

console.log (sumarHastaNConBreak(5))

// NOTA: este test no devuelve el valor correcto cuando n = 20