const myArray = [2, 8, 23, 16, 10, 15, 41, 12, 13]

function retornaNumerosParesElevadosADois(array) {
  let number = array[0]
  for (i = 0; i < array.length; i++) {
    if (array[i] > number) {
      number = array[i]
    }
  }

  return console.log(number)
}

retornaNumerosParesElevadosADois(myArray)