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

const nf = (client) => {
  if (client.typeGame.toUpperCase() === 'NC') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Nacional')
    
    let valor
    switch (client.timeGame.toUpperCase() === 'SF') {
      case client.category === 4:
        valor = 220
        break
      case client.category === 3:
        valor = 550
        break
      case client.category === 2:
        valor = 880
        break
      case client.category === 1:
        valor = 1320
        break
    }
    console.log('Tipo do jogo:  Nacional')
  } else if (client.typeGame.toUpperCase() === 'IT') {
    console.log('---Dados da compra---')
    console.log(`Nome do cliente:  ${client.name}`)
    console.log('Tipo do jogo:  Internacional')
  } else {
    return console.log('Compra não realizada')
  }


  switch (client.typeGame.toUpperCase() === 'IT') {
    case "Laranja":
      preco = 3.5
      break;
    case "Maçã":
      preco = 2.25
      break;
    case "Uva":
      preco = 0.30
      break;
    case "Pêra":
      preco = 5.5
      break; // BREAK PARA O ITEM c.
    default:
      preco = 5
      break;
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