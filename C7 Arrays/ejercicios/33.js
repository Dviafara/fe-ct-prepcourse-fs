function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var string1 = str1.split("");
  var string2 = str2.split("");
  var string3 = str3.split("");
  var masLargo = Math.max(string1.length, string2.length, string3.length);
  var resultado = [];

  for (let i = 0; i < masLargo; i++) {
    resultado.push(string1[i]);
    resultado.push(string2[i]);
    resultado.push(string3[i]);
  }

  return resultado.filter(ele=>ele!==undefined).filter(ele=>ele!==" ").join("");

}

module.exports = combine;