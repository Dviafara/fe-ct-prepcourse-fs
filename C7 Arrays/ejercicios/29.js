function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  // var faltante=0;
  if (numeros.length===0) return null;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i+1]-numeros[i]===2) return numeros[i]+1;
  }
  return null;
}

module.exports = encontrarNumeroFaltante;