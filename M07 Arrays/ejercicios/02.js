function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  const newArray = []; 
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(String(array[i]));
  }

  for (let j = 0 ; j < newArray.length; j++) {
    newArray[j] = Number(array[j]); 
  }

  // newArray.sort();
  return newArray

  // return array.sort();
}

console.log (ordenarArray([e,r,w,t]));


module.exports = ordenarArray;


// Nota: debe definir si son letras o numeros