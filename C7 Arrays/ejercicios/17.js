function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  return arrayOfNums.reduce((acumulador, valorActual) => acumulador + valorActual);

  // var suma = 0;
  // for (let i = 0; i < arrayOfNums.length; i++) {
  //   suma += arrayOfNums[i];
  // }
  // return suma;
}

module.exports = agregarNumeros;
