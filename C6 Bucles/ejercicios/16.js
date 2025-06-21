function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  if ((idioma!=="aleman" && idioma!=="mandarin" && idioma!=="ingles") || typeof idioma === "undefined") {
    return "Hola!";
  }else if (idioma==="aleman") {
    return "Guten Tag!";
  }
  else if (idioma==="ingles") {
    return "Hello!";
  }
  else if (idioma==="mandarin") {
    return "Ni Hao!";
  }
}

module.exports = saludo;
