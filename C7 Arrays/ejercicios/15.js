function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  // var newArray = [...array];
  // newArray.sort((a,b)=>b - a);
  // return array.indexOf(newArray[0]);

  var indiceMayor=0;
  for (let i = 1; i < array.length; i++) {
    if (array[i]>array[indiceMayor]) {
      indiceMayor=i;
    }
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
