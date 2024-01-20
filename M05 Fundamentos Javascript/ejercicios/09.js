function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  
  if (valor === null) {
      return true;
  }

  if ( valor === undefined) {
    return true;
}
  return false;
}

module.exports = esNuloOIndefinido;

console.log(esNuloOIndefinido());

// // duda por que asi no funciona
// if (valor === null  || valor === undefined) {
//   return true;
// }





