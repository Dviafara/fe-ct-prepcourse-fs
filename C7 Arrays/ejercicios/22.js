function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = [0];
  var c=0;
  while (c<60){
    c += 6;
    tabla.push(c);
  }
  return tabla;
}

module.exports = tablaDelSeis;
