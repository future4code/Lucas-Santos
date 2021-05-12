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
// const animal = Number(prompt('Quantos bixihnos tu tem?'))
// // a.
// if (animal === 0) {
//   console.log('Que pena! Você pode adotar um pet!')
// // b.
// } else if (animal > 0) {
//   const namesPets = []
//   while (namesPets.length < animal) {
//     const pets = prompt('Digite o nome dos bixinhos:')
//     namesPets.push(pets)
//   }
// // c.
//   i = 0
//   while (i < namesPets.length) {
//     console.log(namesPets[i])
//     i++
//   }
// }

// 2)
const lista = [100, 111, 120, 153]
// a.
// const counterArray = (array) => {
//   let i = 0
//   while(i < array.length) {
//     console.log('a.', array[i])
//     i++
//   }
// }
// counterArray(lista)
// b.
// const divideArrayTen = (array) => {
//   let i = 0
//   while(i < array.length) {
//     console.log('b.', array[i] / 10)
//     i++
//   }
// }
// divideArrayTen(lista)
// c.
const onlyPairArray = (array) => {
  let i = 0
  while(i < array.length) {
    if (array[i] % 2 === 0) {
      console.log('c.', array[i])
    }
    i++
  }
}
onlyPairArray(lista)