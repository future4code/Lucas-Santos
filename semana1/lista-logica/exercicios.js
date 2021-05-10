// Exemplos

// Exercício 0A

function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
  const altura = Number(prompt('Insita uma Altura!'))
  const largura = Number(prompt('Insita uma Largura!'))

  const area = altura * largura

  console.log(area)
}

//Exercício 2

function imprimeIdade() {
  const anoAtual = Number(prompt('Insita o ano atual!'))
  const nascimento = Number(prompt('Insita o ano de nascimento!'))

  const idade = anoAtual - nascimento

  console.log(idade)
}

//Exercício 3

function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)

  return imc
}

//Exercício 4

function imprimeInformacoesUsuario() {
  const nome = prompt('')
  const idade = Number(prompt(''))
  const email = prompt('')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
  const favoriteColor1 = prompt('')
  const favoriteColor2 = prompt('')
  const favoriteColor3 = prompt('')

  console.log([favoriteColor1, favoriteColor2, favoriteColor3])
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// Exercício 9

function retornaPrimeiroElemento(array) {
  return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
  const i = array.length - 1
  return array[i]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
  const iFinal = array.length - 1
  const numberFinal = array[iFinal]
  
  array[iFinal] = array[0]
  array[0] = numberFinal

  return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() == string2.toLowerCase()
}

// Exercício 13

function checaRenovacaoRG() {
  const anoAtual = Number(prompt(''))
  const aniver = Number(prompt(''))
  const doc = Number(prompt(''))

  const idade = anoAtual - aniver
  const verificarDoc = anoAtual - doc

  const jovem = idade <= 20 && verificarDoc < 5 // false
  const adulto = idade > 20 && idade <= 50 && verificarDoc < 10 // false
  const idoso = idade > 50 && verificarDoc < 15 // false

  const verificarRenovacao = jovem || adulto || idoso

  console.log(!verificarRenovacao)
}

// Exercício 14

function checaAnoBissexto(ano) {
  const cond1 = ano % 400 === 0
  const cond2 = ano % 4 === 0 && ano % 100 !== 0

  const bissexto = cond1 || cond2

  return bissexto
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt('')
  const ensinoMedio = prompt('')
  const horarioDisponivel = prompt('')

  const sim = 'sim'

  const maiorIdadeVerify = maiorIdade.toLowerCase() === sim
  const ensinoMedioVerify = ensinoMedio.toLowerCase() === sim
  const horarioDisponivelVerify = horarioDisponivel.toLowerCase() === sim

  const verificarMatricula = maiorIdadeVerify && ensinoMedioVerify && horarioDisponivelVerify

  console.log(verificarMatricula)
}