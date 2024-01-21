function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

// Para que se cumpla si un numero NO es potencia de 2 se deben cumplir 3 condiciones

// 1. que el numero se mayor a uno
  while (numero > 1) {

    // 2. que el numero No sea divisible
    if (numero % 2 !== 0) {
      console.log('1.' + numero);
        return false;
    }

    // 3. si es mayor divido el numero / 2 y redondeo al entero decimal de menor valor y vuelvo a iterar
    numero = Math.floor(numero / 2);
    console.log('2.' + numero);
}
return true;
}


module.exports = esPotenciaDeDos;
console.log (esPotenciaDeDos(4));