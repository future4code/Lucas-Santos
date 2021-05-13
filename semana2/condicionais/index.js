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
      break
    case 'V':
      console.log('Boa Tarde!')
      break
    case 'N':
      console.log('Boa Noite!')
      break
    default:
      console.log('Período não encontrado.')
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


// Desafios

// 1)

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
const client = {
  name: prompt('Digite seu nome completo:'),
  typeGame: prompt('Região do jogo: IT = internacional | NC = Nacional').toUpperCase(),
  timeGame: prompt('Etapa do jogo: SF = semi-final | DT = decisão do 3º lugar | FN = final').toUpperCase(),
  category: Number(prompt('Categoria: 1 | 2 | 3 | 4')),
  ticket: Number(prompt('Quantidade de ingressos:'))
}

const prices = (client) => {
  const dolar = 4.10
  let price
  if (client.timeGame === 'SF') {    
    switch (client.category) {
      case 4:
        price = 220
        break
      case 3:
        price = 550
        break
      case 2:
        price = 880
        break
      case 1:
        price = 1320
        break
    }
    
    if (client.typeGame === 'NC') {
      console.log(`Valor do ingresso: R$ ${price},00\nValor total: R$ ${price * client.ticket},00`)

    } else if (client.typeGame === 'IT') {
      console.log(`Valor do ingresso: U$ ${price},00\nValor total: U$ ${price * client.ticket * dolar},00`)
    }    

  } else if (client.timeGame === 'DT') {
    switch (client.category) {
      case 4:
        price = 170
        break
      case 3:
        price = 330
        break
      case 2:
        price = 440
        break
      case 1:
        price = 660
        break
    }

    if (client.typeGame === 'NC') {
      console.log(`Valor do ingresso: R$ ${price},00\nValor total: R$ ${price * client.ticket},00`)

    } else if (client.typeGame === 'IT') {
      console.log(`Valor do ingresso: U$ ${price},00\nValor total: U$ ${price * client.ticket * dolar},00`)
    } 

  } else if (client.timeGame === 'FN') {
    switch (client.category) {
      case 4:
        price = 330
        break
      case 3:
        price = 880
        break
      case 2:
        price = 1320
        break
      case 1:
        price = 1980
        break
    }
    
    if (client.typeGame === 'NC') {
      console.log(`Valor do ingresso: R$ ${price},00\nValor total: R$ ${price * client.ticket},00`)

    } else if (client.typeGame === 'IT') {
      console.log(`Valor do ingresso: U$ ${price},00\nValor total: U$ ${price * client.ticket * dolar},00`)
    }
  }
}

const game = (client) => {
  if (client.timeGame === 'SF') {    
    console.log('Etapa do jogo:  Semifinais')    

  } else if (client.timeGame === 'DT') {
    console.log('Etapa do jogo:  Decisão do 3º lugar')

  } else if (client.timeGame === 'FN') {
    console.log('Etapa do jogo:  Finais')
  }

  console.log(`Categoria:  ${client.category}`)
  console.log(`Quantidade:  ${client.ticket} ingressos`)
  console.log('---Valores---')
  prices(client)
}

const region = (client) => {
  if (client.typeGame === 'NC') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Nacional')
    game(client)
    
  } else if (client.typeGame === 'IT') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Internacional')
    game(client)

  } else {
    return console.log('Compra não realizada')
  }
}

region(client)
