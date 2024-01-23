function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var nuevo = "";
for (var i = texto.length; i <= 1; i--) {
  
  nuevo += texto[i];

// if (index === texto.length){
// return texto
// }
  // const element = array[index];texto
}
return nuevo;
}

module.exports = invertirTexto;

console.log (invertirTexto('mosca'))