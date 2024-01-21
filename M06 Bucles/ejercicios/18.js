function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:


  var factorial = 1;
  var i = 0;

  while (i < b){

    if (b - i >= a){
    factorial *= (b - i);
   }
   i++ 
  }
  if (Math.min(a,b) <= 0){
    return 0;
  }
return factorial

}

 console.log(productoEntreNúmeros(-5,5));
module.exports = productoEntreNúmeros;