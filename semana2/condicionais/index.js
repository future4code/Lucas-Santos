/**
 * Exercícios de interpretação de código
 * 
 * 1)
 * a. ele pede um número pro usuário e faz um comparativo, se ele for PAR ele passa no teste, se for impar ele não passa.
 * b. Números Pares
 * c. Números Impares
 * 
 * 2)
 * a. Para verificar o preço de acordo com a fruta que o usuário escolher.
 * b. O preço da fruta Maça é R$ 2.25
 * c. O preço da fruta Pêra é R$ 5
 * 
 * 3)
 * a. armazenando o o prompt, que vai ser um número na váriavel chamada numero.
 * b. vai dar erro embos testes
 * c. Sim, pois a váriavel mensagem está dentro do scopo IF e console está em escopo global
 * 
 */

// Exercícios de escrita de código

// 1)
// a. | b. | c.
/*
const age = Number(prompt('Digite a sua idade:'))

const yesYouCan = (driver) => {
  if(driver > 18) {
    return console.log('Você pode Dirigir Sir!!')
  } else {
    return console.log('Você não pode dirigir menô!!')
  }
}

yesYouCan(age)

// 2)
const timeCourse = prompt('Digite o seu turno:')

const course = (time) => {
  if(time.toUpperCase() === 'M') {
    return console.log('Bom Dia!')
  } else if(time.toUpperCase() === 'V') {
    return console.log('Boa Tarde!')
  } else if(time.toUpperCase() === 'N') {
    return console.log('Boa Noite!')
  } else {
    return console.log('Período não encontrado.')
  }
}

course(timeCourse)

// 3)
const timeCourse2 = prompt('Digite o seu turno:')

const course2 = (time) => {
  switch (time.toUpperCase()) {
    case 'M':
      console.log('Bom Dia!')
      break;
    case 'V':
      console.log('Boa Tarde!')
      break;
    case 'N':
      console.log('Boa Noite!')
      break;
    default:
      console.log('Período não encontrado.')
      break;
  }
}

course2(timeCourse2)

// 4)
const genderMovie = prompt('Digite o genero do filme:')
const ticket = Number(prompt('Digite o valor da entrada:'))

const verifyTicket = (movie, money) => {
  if(movie.toLowerCase() === 'fantasia' && money < 15) {
    return console.log('Bom filme!!')
  } else {
    return console.log('Escolha outro filme :(')
  }
}

verifyTicket(genderMovie, ticket)
*/

// Desafios

// 1)
/*
const genderMovie = prompt('Digite o genero do filme:')
const ticket = Number(prompt('Digite o valor da entrada:'))

const verifyTicket = (movie, money) => {
  if(movie.toLowerCase() === 'fantasia' && money < 15) {
    const snack = prompt('Qual lanche vai comprar?')
    console.log('Bom filme!!')
    console.log(`Aproveite o seu ${snack}`)
  } else {
    console.log('Escolha outro filme :(')
  }
}

verifyTicket(genderMovie, ticket)
*/

// 2)
/*
O seu sistema deve solicitar estas informações ao usuário, através do prompt . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/
const lucas = {
  name: 'Lucas Gomes',
  typeGame: 'NC',
  timeGame: 'FI',
  category: 4,
  ticket: 1
}

const game = () => {
  if (client.typeGame.toUpperCase() === 'NC') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Nacional')
  } else if (client.typeGame.toUpperCase() === 'IT') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Internacional')
  }
}

const region = (client) => {
  if (client.typeGame.toUpperCase() === 'NC') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Nacional')
    game()
  } else if (client.typeGame.toUpperCase() === 'IT') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Internacional')
    game()
  } else {
    return console.log('Compra não realizada')
  }
}

/*
---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800
*/