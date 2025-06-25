function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var c=0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]>10) {
      c++;
    }
  }
  return c;
  //return array.filter(num=>num>10).length;

}

module.exports = contarElementosMayoresA10;
