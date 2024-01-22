// function esNumeroPrimo(numero) {
    //   // La función recibe un argumento "numero".
    //   // Determina si este corresponde a un número primo.
    //   // De ser así, retorna true.
    //   // De lo contrario, retorna false.
    //   // IMPORTANTE: Recuerda que un número primo es aquel que
    //   // solo es divisible por sí mismo y por 1.
    //   // Tu código:
    var numero = 10;
    var factorial = 1;
    var i = 0;
    while ( i < numero){
      if (numero - i > 1){
      factorial *= (numero - i);
      console.log (factorial);
     }
     i++ 
    }
    
    if (factorial % numero === 0){
    return true;
    }
    return false;
    // }


// var resultado = factorial;
// console.log (resultado);