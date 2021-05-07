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
  const favoriteColor = []
  
  const favoriteColor1 = prompt('')
  const favoriteColor2 = prompt('')
  const favoriteColor3 = prompt('')

  favoriteColor.push(favoriteColor1, favoriteColor2, favoriteColor3)

  console.log(favoriteColor)
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
  const anoAtual = 2021
  const aniver = 1992
  const doc = 2000

  const idade = anoAtual - aniver

  const jovem = idade <= 20 // = 5 em 5
  const adulto = idade > 20 && idade <= 50 // = 10 em 10
  const idoso = idade > 50 // = 15 em 15

  


}

// Exercício 14

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}