function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  if (callback) {
  callback(string);
  return callback
}

return string;
}




module.exports = cambiarCadena;
