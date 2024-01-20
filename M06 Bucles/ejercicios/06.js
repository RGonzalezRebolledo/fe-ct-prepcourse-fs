function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  var strnumero = String(num);
  
    if (strnumero.length === 3){
      return true;
    }
      else{
      return false;
      }
  
}

module.exports = tieneTresDigitos;

// Notification: la propiedad length no aplica para numeros hay que convertirlos en String