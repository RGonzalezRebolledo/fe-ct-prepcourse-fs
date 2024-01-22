function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;

  for (var i = 0; i <= n; i++){
      suma += (n - i);
    }
  return suma
}

module.exports = sumarHastaN;
console.log (sumarHastaN(10));
