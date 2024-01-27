function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  const newArray = []; 
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);  
  }
  return newArray
}

console.log (invertirArray([1,2,3,4]));
module.exports = invertirArray;
