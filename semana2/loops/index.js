/**
 * Exercícios de interpretação de código
 * 
 * 1) está injetando números na variável valor de 0 até 4
 * 
 * 2)
 * a. 19, 21, 23, 25, 27, 30
 * 
 * b.
 * const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
 * for (let numero of lista) {
 *    if (numero >= lista[0]) {
 *      console.log(numero)
 *    }
 * }
 * 
 * 3)
 * 0
 * 00
 * 000
 * 0000
 * 
 */


// 1)
const animal = Number(prompt('Quantos bixihnos tu tem?'))
// a.
if (animal === 0) {
  console.log('Que pena! Você pode adotar um pet!')
// b.
} else if (animal > 0) {
  const namesPets = []
  while (namesPets.length < animal) {
    const pets = prompt('Digite o nome dos bixinhos:')
    namesPets.push(pets)
  }
// c.
  i = 0
  while (i < namesPets.length) {
    console.log(namesPets[i])
    i++
  }
}

// 2)
const lista = [120, 211, 112, 153]
// a.
const counterArray = (array) => {
  let i = 0
  while(i < array.length) {
    console.log('a.', array[i])
    i++
  }
}
counterArray(lista)
// b.
const divideArrayTen = (array) => {
  let i = 0
  while(i < array.length) {
    console.log('b.', array[i] / 10)
    i++
  }
}
divideArrayTen(lista)
// c.
const onlyPairArray = (array) => {
  let i = 0
  let newArray = []
  while(i < array.length) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i])
    }
    i++
  }
  console.log('c.', newArray)
}
onlyPairArray(lista)
// d.
const selectArray = (array) => {
  let i = 0
  while(i < array.length) {
    console.log(`d. O elemento do índex ${i} é: ${array[i]}`)
    i++
  }
}
selectArray(lista)
// e.
const maxMiniArray = (array) => {
  let i = 0
  let min = array[0]
  let max = array[0]

  while(i < array.length) {
    if (array[i] < min) {
      min = array[i]
    } else if (array[i] > max) {
      max = array[i]      
    }
    i++
  }

  console.log(`e. O maior número é ${max} e o menor é ${min}`)
}
maxMiniArray(lista)


// DESAFIOS

// 1)
// a.
const theNumber = Number(prompt('Bora Jogar! Digite um número:'))
// // b.
let thePick = Number(prompt('Tente acertar O NÚMERO:'))
let i = 1

while (thePick > theNumber || thePick < theNumber) {
  console.log(`O número chutado foi: ${thePick}`)

  if (thePick > theNumber) {
    console.log('Errrrrrrrou, é maior')
  } else if (thePick < theNumber) {
    console.log('Errrrrrrrou, é menor')
  }

  thePick = Number(prompt('Tente outra vez:'))
  i++
}
// // c.
if (thePick === theNumber) {
  console.log(`Acertou!! O número de tentativas foi: ${i}`)
}

// 2)
const randomNumber = Math.random() * (100 - 1) + 1
const theNumber = randomNumber.toFixed()
console.log(theNumber)
let thePick = Number(prompt('Tente acertar "O NÚMERO":'))

let i = 1
while (thePick > theNumber || thePick < theNumber) {
  console.log(`O número chutado foi: ${thePick}`)

  if (thePick > theNumber) {
    console.log('Errrrrrrrou, é maior')
  } else if (thePick < theNumber) {
    console.log('Errrrrrrrou, é menor')
  }

  thePick = Number(prompt('Tente outra vez:'))
  i++
}

if (thePick === theNumber) {
  console.log(`Acertou!! O número de tentativas foi: ${i}`)
}