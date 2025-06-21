function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var c=0;
  for (let i = 1; i <=n; i++) {
    c += i;
  }
  return c;
}

module.exports = sumarHastaN;
