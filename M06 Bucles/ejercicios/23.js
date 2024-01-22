function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
var i = 0;
  do {
    i++
    console.log ('pasada: ' + i);
    num += 5;

    console.log ('sumas: ' + num);
    if (i === 8){
      return num;
    }

  } while (i <= 7);

}

module.exports = doWhile;

console.log (doWhile(80));

