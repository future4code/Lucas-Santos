// Exercícios de interpretação de código

// 1)
// a. 10 e 50
// b. estaria declarando a função, porém para aparecer no console, precisa do console.log

// 2)
// a. a função procura a palavra 'cenoura' dentro de uma string, em um parâmetro chamado (texto)
// b. true true true



// Exercícios de escrita de código

// 1)
// a.

const user = 'Lucas Gomes'
const age = 28
const city = 'Ribeirão Preto'
const study = 'estudante'

const aboutMe = () => {
  const frase = `Eu sou o(a) ${user}, tenho ${age} anos, moro em ${city} e sou ${study}.`

  return console.log('1) a.', frase)
}

aboutMe()
// b.
const aboutMe2 = (name, age, city, work) => {
  const frase = `Eu sou o(a) ${name}, tenho ${age} anos, moro em ${city} e sou ${work}.`

  return console.log('b.', frase)
}

aboutMe2('Lucas', 28, 'Ribeirão Preto', 'Developer')

// 2)
// a.
const soma = (number1, number2) => {
  return console.log(`2) a. ${number1} + ${number2} =`, number1 + number2)
}

soma(5, 5)
// b.
const maiorIgual = (number1, number2) => {
  return console.log(`b. ${number1} >= ${number2} =`, number1 >= number2)
}

maiorIgual(7, 3)
// c.
const booleano = (number) => {
  const resto = number % 2
  const verifyNumber = resto === 0

  return console.log(`c. ${number} é par =`, verifyNumber)
}

booleano(4)
// d.
const frase = (msg) => {
  const tamanho = msg.length
  const maiuscula = msg.toUpperCase()

  const printMsg = `${maiuscula}. Tamanho da msg: ${tamanho}`

  return console.log('d.', printMsg)
}

frase('Eu gosto de chocolate')

// 3)
const number1 = Number(prompt('Insira um número'))
const number2 = Number(prompt('Insira outro número'))
console.log(`3) Números inseridos ${number1} e ${number2}`)
const somar = () => {
  return number1 + number2
}
console.log(`Soma:`, somar())
const subtrair = () => {
  return number1 - number2
}
console.log(`Diferença:`, subtrair())
const multi = () => {
  return number1 * number2
}
console.log(`Multiplicação:`, multi())
const divisao = () => {
  return number1 / number2
}
console.log(`Divisão:`, divisao())


// DESAFIOS

// 1)
// a.
const parametro = (coisa) => {
  return console.log(coisa)
}

const sum = (num1, num2) => {
  const result = num1 + num2
  parametro(result)
}

sum(4, 4)

