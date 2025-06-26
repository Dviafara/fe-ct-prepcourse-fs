const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var c=0;
  for (const prop in objeto) {
    c++;
  }
  return c;
};

module.exports = contarPropiedades;
