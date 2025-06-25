function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  return resultadosTest.reduce((acumulador, valorActual)=>acumulador+valorActual)/resultadosTest.length;

  // var sumaNotas=0;
  // for (let i = 0; i < resultadosTest.length; i++) {
  //   sumaNotas += resultadosTest[i];
  // }
  // return sumaNotas/resultadosTest.length;
}

module.exports = promedioResultadosTest;
