const myArray = [2, 8, 23, 16, 10, 15, 41, 12, 13]

function retornaNumerosParesElevadosADois(array) {
  const newArray = array.filter((number) => {
    return number % 2 === 0
  }).map((number) => {
    return number ** 2
  })

  return console.log(newArray)
}

retornaNumerosParesElevadosADois(myArray)